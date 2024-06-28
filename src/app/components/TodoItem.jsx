import { useState } from 'react'

function TodoItem({ addTask }) {
	const [UserInput, setUserInput] = useState('')

	const handleChange = (e) => {
		setUserInput(e.currentTarget.value)
	}
	
	const handleSubmit = (e) => {
		e.preventDefault()
		addTask(UserInput)
		setUserInput("")
	}

	// const handleKeyPress = (e) => {
	// 	if(e.key === "Enter") {
	// 		handleSubmit(e)
	// 	}
	// }

	return (
		<form onSubmit={handleSubmit}>
			<input 
				type='text' 
				value={UserInput} 
				onChange={handleChange}
				// onKeyDown={handleKeyPress}
				placeholder='Введите значение'
			/>
			<button>Сохранить</button>
		</form>
	)
}

export default TodoItem
