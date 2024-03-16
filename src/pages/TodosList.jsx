import { useEffect, useState } from "react"
import Todo from "./../components/Todo"
import React from 'react'
import axios from "axios"

const todosURL = `https://jsonplaceholder.typicode.com/todos/`

function TodosList() {

    const [todos, setTodos] = useState([])
    const [completedTodos, setCompletedTodos] = useState(0)

    useEffect(() => {

        axios.get(todosURL)
            .then(response => setTodos(response.data))

    }, [])


    useEffect(() => {

        const completedTodosArray = todos.filter(todo => todo.completed)
        setCompletedTodos(completedTodosArray.length)

    }, [todos])


    const toggleTodo = (todoId) => {

        const newTodos = [...todos]
        const todoToToggle = newTodos.find(todo => todo.id === todoId)
        todoToToggle.completed = !todoToToggle.completed
        setTodos(newTodos)

    }

    return (
        <div className="container">

            Completed Todos: {completedTodos} <br />
            Incomplete Todos: {todos.length - completedTodos}

            <hr />

            {todos.map(todo => <Todo toggleTodo={toggleTodo} key={todo.id} todo={todo} />)}


        </div>
    )
}

export default TodosList