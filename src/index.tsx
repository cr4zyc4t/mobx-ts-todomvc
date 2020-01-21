import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TodoApp, { Filter } from './models/TodoApp';
import storeContext from './context';

const store = new TodoApp(Filter.All, []);

ReactDOM.render(
	<storeContext.Provider value={store}>
		<App />
	</storeContext.Provider>,
	document.getElementById('root')
);
