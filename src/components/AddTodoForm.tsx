import React, { useRef, useContext, FormEvent, useCallback } from "react";
import storeContext from "../context";
import { observer } from "mobx-react";

export default observer(function AddTodoForm() {
	const inputRef = useRef<HTMLInputElement>(null)
	const store = useContext(storeContext)

	const handleSubmit = useCallback((e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const input = inputRef.current;
		if (input === null) {
			return;
		}
		const value = input.value.trim();
		if (value) {
			store.addTodo(value);
			input.value = "";
		}
		input.focus();
	}, [store])

	return (
		<div>
			<input type="checkbox" checked={store.completedTodos.length === store.todos.length && store.todos.length > 0} onChange={(e) => store.toggleAll(e.target.checked)} />
			<form onSubmit={handleSubmit}>
				<input type="text" ref={inputRef} />
				<button type="submit">Submit</button>
			</form>
		</div>
	)
})