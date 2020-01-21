import React, { useContext } from "react"
import { observer } from "mobx-react"
import storeContext from "../context"
import { Filter } from "../models/TodoApp"

export default observer(function FilterBar() {
	const store = useContext(storeContext)
	const currentFilter = store.filter;

	return (
		<div>
			{Object.keys(Filter).map((key) => (
				<button
					key={key}
					onClick={() => store.changeFilter(key as Filter)}
					style={{ backgroundColor: currentFilter === key ? "green" : "none" }}
				>{key}</button>
			))}
			<br/>
			<span>Active/Total: {store.activeTodos.length}/{store.todos.length}</span>
		</div>
	)
})