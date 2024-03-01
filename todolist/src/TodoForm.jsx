import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Enter a new task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button className='add' type="submit">Add</button>
    </form>
  );
};

export default TodoForm;