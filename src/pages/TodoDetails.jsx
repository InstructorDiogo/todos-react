import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const apiURL = `https://jsonplaceholder.typicode.com/`

function TodoDetails() {

    const { todoId } = useParams()

    const [todo, setTodo] = useState({})
    const [user, setUser] = useState({})

    useEffect(() => {

        // first call to get the todo
        axios.get(apiURL + `todos/${todoId}`)
            .then(response => {
                const todo = response.data
                setTodo(todo)

                // second call to get the coresponding user
                axios.get(apiURL + `users/${todo.userId}`)
                    .then(response => {
                        const user = response.data
                        setUser(user)
                    })

            })

    }, [])


    return (
        <div>

            Title: {todo.title}

            <br />

            Owner: {user.name}

            <br />

            {todo.completed ? <>Completed!</> : <>Incomplete</>}

        </div>
    )
}

export default TodoDetails