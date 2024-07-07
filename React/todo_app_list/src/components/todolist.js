import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import './todolist.css'
import { toggletodo, removetodo } from '../redux/todoAction'
import './todolist.css'
import box from '../static/checkbox.png';
import checkbox from '../static/check.png';
import Image from 'react-bootstrap/Image';


function TodoList() {

    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    
  return (
    <div className='container'>
        <h1 className='my-3' style={{color: 'orange'}}>Items</h1>
        <hr style={{color: 'black'}}/>
        <ul>
            {todos.map((todo, index) => (
                <li class="wraplist" key={todo.id}>
                    <Image src={todo.completed ? checkbox : box } alt="check Image" className='checkboxthing' onClick={() => dispatch(toggletodo(index))}/>
                    <span className={todo.completed ? 'completed':'pending'}>{todo.text}</span>

                    <span class='closeicon' onClick={() => dispatch(removetodo(index))}>x</span>
                </li>
            )
        )}
        </ul>
    </div>
  )
}

export default TodoList