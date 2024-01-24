import React, { useState } from 'react';

function TodoForm({ addTodo }) {
  const [Text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your TODO..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add TODO</button>
    </form>
  );
}

export default TodoForm;