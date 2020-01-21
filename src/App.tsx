import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import FilterBar from './components/FilterBar';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

      </header>
      <AddTodoForm />
      <TodoList />
      <FilterBar />
    </div>
  );
}

export default App;
