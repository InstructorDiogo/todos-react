
import { useState } from 'react'
import Todo from './components/Todo'
import todosJSON from './assets/todos.json'

function App() {

  const [todos, setTodos] = useState(todosJSON)

  const clearList = () => {
    setTodos([])
  }

  const refreshList = () => {
    setTodos(todosJSON)
  }

  // set todos array to have all its elements
  // EXCEPT for the one we're deleting!
  const deleteTodo = (id) => {

    console.log(`Deleting the todo with id ${id}.`)
    setTodos(todos.filter(todo => todo.id !== id))

  }

  // retrieve the todo id, toggle its "complete" variable
  const toggleTodo = (id) => {

      // create a copy of the array ie. [...array]
      // loop the array and change the todo with "id" in this parameter
      // update todos setTodos(changedArray)

  }

  // use a filter to get only completed todos
  // and setTodos to that filtered array
  const showOnlyCompleted = () => {

    setTodos(todosJSON.filter(todo => todo.completed == true))
    
  }
  
  // use a filter to get only incomplete todos
  // and setTodos to that filtered array
  const showOnlyIncomplete = () => {
    
    setTodos(todosJSON.filter(todo => todo.completed == false))

  }

  return (
    <div className={`container`}>

      <h2>Todo List</h2>

      <div className='actions'>
        <button onClick={showOnlyIncomplete}> Incomplete </button>
        <button onClick={showOnlyCompleted}> Completed </button>
        <button onClick={clearList}>Clear List</button>
        <button onClick={refreshList}>Refresh List</button>
      </div>

      <div className='todo-list'>

        {todos.map(todo =>
          <Todo
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            todo={todo}
          />)}

      </div>

    </div>
  )
}

export default App
