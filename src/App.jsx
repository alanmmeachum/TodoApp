import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import TodoList from './components/TodoList'

function App() {

  const [task, setTask] = useState([]);

  return (
    <div className='mainForm'>
    <TodoForm task={task} setTask={setTask} />
    <TodoList task={task} setTask={setTask}/>
    </div>
  )
}

export default App
