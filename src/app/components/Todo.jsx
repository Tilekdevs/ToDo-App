const Todo = ({ todo, completedTask, removeTask }) => {
	return (
		<div key={todo.id} className='Item-Todo'>
			<div
				className={todo.complete ? 'item-text strike' : 'item-text'}
				onClick={() => completedTask(todo.id)}
				style={todo.complete ? {textDecorationLine: "line-through"} : {}}
			>
				{todo.task}
			</div>
			<div className='Item-Delete' onClick={() => removeTask(todo.id)}>
				x
			</div>
		</div>
	)
}

export default Todo
