import "./TodoList.css";
//access the store state
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../../redux/actions/todoActions";

function ToDoList() {
 
  // now todo list dont depend on the parent data, it will get the data from useSelector and from store directly
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  // one way of doing
  // const onToggle = (index) => {
  //   dispatch(toggleTodo(index));
  // };

  return (
    <div className="container">
    <ul>
      {todos.map((todo,index) => (
        <li key={todo.id}>
          <span className="content">{todo.text}</span>
          <span className={todo.completed ? 'completed':'pending'}>{todo.completed ? 'Completed': 'Pending'}</span>
          <button className="btn btn-warning"
          // another way is to wrap the toggleTodo(index) into dispatch function
          onClick={()=>{dispatch(toggleTodo(index))}}
          >Toggle</button>
          <button className="btn btn-danger"
          // another way is to wrap the toggleTodo(index) into dispatch function
          onClick={()=>{dispatch(removeTodo(index))}}
          >Delete</button>
          </li>
      ))}
    </ul>
    </div>
  );
}

export default ToDoList;
