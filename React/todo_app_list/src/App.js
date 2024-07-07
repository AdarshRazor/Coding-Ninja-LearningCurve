import './App.css';
import TodoForm from './components/todoform';
import TodoList from './components/todolist';
import {Provider} from 'react-redux'
import store1 from './redux/store'
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([]);

  // Function Declarations, that takes one argument `text`
  const createTodo = (text) => {
    //setTodos - function to update the state.
    // `[...TodoList, {}]` spread operator to create a new array. Takes all the existing items from the TodoList and add a new object in the end.
    setTodos([...todos, {id:todos.length +1, text, completed: false}])
  }

  // Function Declarations, that takes one argument `index`
  const toggleTodo = (index) => {
    // create a shallow copy of the todos array.
    const list = [...todos];
    //  toggles the completed status
    list[index].completed =!list[index].completed;
    //  updates the todos state with the new array.
    setTodos(list);
  }

  return (
    <div className="App">
      <Provider store={store1}>
      <div className="container">
      <TodoForm onCreateTodo={createTodo}/>
      <TodoList todos={todos} onToggle={toggleTodo}/>
      </div>
      </Provider>
    </div>
  );
}

export default App;
