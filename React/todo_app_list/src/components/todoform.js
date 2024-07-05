import React, { useState } from 'react';
import './todoform.css'
import { useDispatch } from 'react-redux';
import { addtodo } from '../redux/todoAction';

const TodoForm = () => {
    const [ todoText, settodoText ] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todoText);
        dispatch(addtodo(todoText))
        settodoText("");
    }

    const toggleLightMode = () => {
        setDarkMode(!darkMode);
    };
    
    const dispatch = useDispatch()

    return(
        <div className={`container ${darkMode ? 'light-mode' : ''}`}>
            <div className='header py-3'>
            <h1 style={{fontWeight: 'bold'}}>Todo List</h1><br/>
            <button className="light-mode-toggle" onClick={toggleLightMode}>
                {darkMode ? '🌕' : '☀️'}
            </button>
            </div>
        <form onSubmit={handleSubmit}>
            <input type="text" className='inputtext' value={todoText} onChange={(e) => settodoText(e.target.value)} placeholder="Add a todo..." required/>
            <button variant="primary" type="submit">Add Todo</button>
        </form>
        </div>
    )
}

export default TodoForm;