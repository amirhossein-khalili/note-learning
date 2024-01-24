import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function App() {

  return (
    
       const [todos, setTodos] = useState([]);

const addTodo = (text) => {
  // Function to add a new TODO item
  // Update the state of the todos array
};

const removeTodo = (id) => {
  // Function to remove a TODO item
  // Update the state of the todos array
};

return (
  <div className="app">
    <h1>TODO List</h1>
    <TodoList todos={todos} removeTodo={removeTodo} />
    <TodoForm addTodo={addTodo} />
  </div>

    
  )
}

export default App
