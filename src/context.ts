import { createContext } from "react";
import TodoApp, { Filter } from "./models/TodoApp";

const defaultValue = new TodoApp(Filter.All, [])

const storeContext = createContext<TodoApp>(defaultValue);

export default storeContext;