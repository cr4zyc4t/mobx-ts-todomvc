import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import storeContext from "../context";
import { observer } from "mobx-react";

export default observer(function TodoList() {
	const store = useContext(storeContext)

	return (
		<div>
			{
				store.showTodos.map(todo => (
					<TodoItem todo={todo} key={todo.id} />
				))
			}
		</div>
	)
})