import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import './App.css';
const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    const newTodo = { text, isCompleted: false };
    setTodos([...todos, newTodo]);
  };

  const completeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = <style>textDecoration: 'line-through'</style>
    setTodos(updatedTodos);
    //!updatedTodos[index].isCompleted;
    
  };

  const removeTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };
 
  return (
    <div className="todo-app">
      <div className="todo-app-container">
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <div className="todo-list">
          {todos.map((todo, index) => (
           
            <TodoItem
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          ))}
        </div>
      </div>
    </div>
  )
};

export default App;