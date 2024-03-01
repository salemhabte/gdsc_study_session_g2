import React from 'react';
import './App.css'
const TodoItem = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div >
      <span className={todo.isCompleted ? 'completed' :  { textDecoration: 'line-through' }}>{todo.text}</span>
      <div className='todo'>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
};

export default TodoItem;