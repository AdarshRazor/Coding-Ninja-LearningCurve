import './App.css';
import TodoForm from './components/todoform';
import TodoList from './components/todolist';
import {Provider} from 'react-redux'
import store1 from './redux/store'

function App() {
  return (
    <div className="App">
      <Provider store={store1}>
      <TodoForm/>
      <TodoList/>
      </Provider>
    </div>
  );
}

export default App;
