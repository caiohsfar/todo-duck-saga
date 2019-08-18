import React from 'react';
import './styles.css';

function TodoList({ data }) {
  const renderList = () => (
    data.map(todo => (
      <li key={todo.id}>
        {todo.name}
      </li>
    ))
  )

  return (
    <ul>
      {renderList()}
    </ul>
  );
}

export default TodoList;
