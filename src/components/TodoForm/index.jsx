import React from 'react'

import './styles.css'

export default function TodoForm({ handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="type a todo..."></input>
          <button type="submit">Add</button>
        </form>
    )
}
