import { useState } from "react";
import "./TodoForm.css";

//functional component that takes onCreateTodo as a prop
function ToDoForm({ onCreateTodo }) {
  // Initializes a state variable todoText with an empty string. 
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // orevent reloading the page
    onCreateTodo(todoText); // function called with the current value of 'todoText'
    setTodoText(""); // reset the input value
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
