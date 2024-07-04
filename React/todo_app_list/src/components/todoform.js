import React, { useState } from 'react';
import './todoform.css'
import { useDispatch } from 'react-redux';
import { addtodo } from '../redux/todoAction';

const TodoForm = () => {
    const [ todoText, settodoText ] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addtodo(todoText))
        settodoText("");
    }

    const dispatch = useDispatch()

    return(
        <div className='container'>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={todoText} onChange={(e) => settodoText(e.target.value)} placeholder="Add a todo..." />
            <button variant="primary" type="submit">Add Todo</button>
        </form>
        </div>
    )
}

export default TodoForm;