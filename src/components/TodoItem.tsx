import React from "react";
import Todo from "../models/Todo";
import { observer } from "mobx-react";

interface TodoProps {
	todo: Todo;
}

export default observer(function TodoItem(props: TodoProps) {
	const { todo } = props;
	return (
		<div>
			<label>
				<input type="checkbox" checked={todo.isCompleted} onChange={() => todo.toggle()} />
				<span style={{ textDecoration: todo.isCompleted ? "line-through" : "none" }}>{todo.title}</span>
			</label>
			<button onClick={() => todo.destroy()}>X</button>
		</div>
	)
})