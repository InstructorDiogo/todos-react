import React from 'react'
import { Link } from 'react-router-dom'

function Todo({ toggleTodo, todo }) {
    return (
        <div className={`todo ${todo.completed ? `completed` : ``}`}>
          
            <Link to={`/${todo.id}`}>
                {todo.title}
            </Link>

            <button  onClick={() => toggleTodo(todo.id)}>
                Toggle
            </button>
        </div>
    )
}

export default Todo

// Clicking a todo changes its "completed" to the reverse value