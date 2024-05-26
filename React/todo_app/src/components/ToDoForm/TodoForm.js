import { useState } from "react";
import "./TodoForm.css";
import { useDispatch } from "react-redux";
import { addTodo} from "../../redux/actions/todoActions";

//functional component that takes onCreateTodo as a prop
function ToDoForm() {
  // Initializes a state variable todoText with an empty string. 
  const [todoText, setTodoText] = useState("");

  // a hook to access the redux dispatch function
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault(); // orevent reloading the page
    //onCreateTodo(todoText); // function called with the current value of 'todoText'  -> now we dont need to have todo from parent coz we can directly send the value to the store.
    setTodoText(""); // reset the input value
    dispatch(addTodo(todoText)); // dispatch the action to the store.
    // todotext pass as arguement. function will be dispatched to the reducer and reducer will update the state
  };

  return (
    <div className="container">
      
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control mb-3"
        value={todoText} // bind the input value to the 'todoText' state
        onChange={(e) => setTodoText(e.target.value)} //Updates the todoText state whenever the input value changes.
      />
      <button className="btn btn-success float-end" type="submit">Create Todo</button>
    </form>
    </div>
  );
}

export default ToDoForm;
