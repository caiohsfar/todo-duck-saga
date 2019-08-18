import React from 'react';
import TodoList from '../../components/TodoList';
import TodoForm from '../../components/TodoForm';

import './styles.css';

export default function Main() {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const data = [
        {id: 1, name: "Tarefa 1"},
        {id: 2, name: "Tarefa 2"},
        {id: 3, name: "Tarefa 3"},
        {id: 4, name: "Tarefa 4"},
        {id: 5, name: "Tarefa 5"},
        {id: 6, name: "Tarefa 6"},
        {id: 7, name: "Tarefa 7"}
    ]
    return (
        <div className="container">
            <div className="panel">
                <TodoForm handleSubmit={handleSubmit} />
                <TodoList data={data} />
            </div>
        </div>
    )
}
