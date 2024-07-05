import './App.css';
import TodoForm from './components/todoform';
import TodoList from './components/todolist';
import {Provider} from 'react-redux'
import store1 from './redux/store'
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (text) => {
    setTodos([...TodoList, {id:TodoList.length +1, text, completed: false}])
  }

  const toggleTodo = (index) => {
    const list = [...todos];
    list[index].completed =!list[index].completed;
    setTodos(list);
  }

  return (
    <div className="App">
      <Provider store={store1}>
      <TodoForm onCreateTodo={createTodo}/>
      <TodoList todos={todos} onToggle={toggleTodo}/>
      </Provider>
    </div>
  );
}

export default App;
