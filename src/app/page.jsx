'use client'
import { useState } from 'react'
import TodoItem from './components/TodoItem'
import ToDo from "./components/Todo"
import './globals.css'

function page() {
	const [todos, setTodos] = useState([])

  console.log([...todos]);


	const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substring(3,9),
        task: userInput,
        complete: false
      }
      setTodos([newItem, ...todos])
    }
  }

	const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)])
  }

	const completedTask = (id) => {
    setTodos([...todos.map((todo) => todo.id === id ? {...todo, complete: !todo.complete} : {...todo})])
  }

	return (
		<div className='App'>
			<header>
				<h1>Список задач: {todos.length}</h1>
			</header>
			<TodoItem addTask={addTask}/>
			{todos.map((todo) => {
				return (
          <ToDo 
            key={todo.id}
            todo={todo}
            completedTask={completedTask}
            removeTask={removeTask}
          />
        )
			})}
		</div>
	)
}

export default page
