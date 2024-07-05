import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import './todolist.css'
import { toggletodo, removetodo } from '../redux/todoAction'
import './todolist.css'


function TodoList() {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    
  return (
    <div className='container'>
        <h1 className='my-5'>Items</h1>
        <hr style={{color: 'white'}}/>
        <ul>
            {todos.map((todo, index) => (
                <li class="wraplist" key={todo.id}>
                    <span onClick={() => dispatch(toggletodo(index))}className={todo.completed ? 'completed':'pending'}>{todo.text}</span>

                    <button class="buton" onClick={() => dispatch(removetodo(index))}>❌</button>
                </li>
            )
        )}
        </ul>
    </div>
  )
}

export default TodoList