import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import './todolist.css'


function TodoList() {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    
  return (
    <div className='container'>
        <h1 className='my-5'>Items</h1>
        <ul>
            {todos.map((todo, index) => (
                <li key={todo.id}>
                    <span>{todo.text}</span>
                    <span>{todo.completed ? '✅': '⚠️'}</span>
                </li>
            )
        )}
        </ul>
    </div>
  )
}

export default TodoList