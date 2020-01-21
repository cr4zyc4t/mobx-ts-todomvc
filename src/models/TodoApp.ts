import { observable, action, IObservableArray, computed } from "mobx";
import Todo from "./Todo";

export enum Filter {
	All = "All",
	Active = "Active",
	Completed = "Completed",
}

export default class TodoApp {
	@observable filter: Filter;
	@observable todos: Todo[];

	constructor(filter: Filter, todos: Todo[]) {
		this.filter = filter;
		this.todos = todos;
	}

	@action
	addTodo(title: string) {
		const newTodo = new Todo(title);
		newTodo.once(Todo.EVENT_DESTROY, () => {
			this.deleteTodo(newTodo.id)
		})
		this.todos.push(newTodo)
	}

	@action
	deleteTodo(id: string) {
		(this.todos as IObservableArray).replace(this.todos.filter(todo => todo.id !== id))
		// this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
	}

	// @action
	// deleteTodo(todo: Todo) {
	// 	(this.todos as IObservableArray).remove(todo);
	// }

	@action
	changeFilter(filter: Filter) {
		this.filter = filter;
	}

	@action
	toggleAll(isChecked: boolean) {
		this.todos.forEach(todo => todo.isCompleted = isChecked)
	}

	@computed
	get completedTodos() {
		return this.todos.filter(todo => todo.isCompleted)
	}

	@computed
	get activeTodos() {
		return this.todos.filter(todo => !todo.isCompleted)
	}

	@computed
	get showTodos() {
		switch (this.filter) {
			case Filter.Active:
				return this.activeTodos;
			case Filter.Completed:
				return this.completedTodos;
			default:
				return this.todos;
		}
	}
}