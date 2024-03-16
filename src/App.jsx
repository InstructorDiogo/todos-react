import { Routes, Route } from "react-router-dom"
import TodoDetails from "./pages/TodoDetails"
import TodosList from "./pages/TodosList"

function App() {

  return <div className="container">

    <Routes>

      <Route path="/" element={<TodosList />} />
      <Route path="/:todoId" element={<TodoDetails />} />

    </Routes>
    
  </div>

}

export default App

