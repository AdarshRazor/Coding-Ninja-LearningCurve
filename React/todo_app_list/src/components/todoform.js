import React, { useState } from "react";
import "./todoform.css";
import { useDispatch } from "react-redux";
import { addtodo } from "../redux/todoAction";
import { Button, Form, InputGroup } from "react-bootstrap";

const TodoForm = () => {
  const [todoText, settodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todoText);
    dispatch(addtodo(todoText));
    settodoText("");
  };

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="header py-3">
        <h1 style={{ fontWeight: "bold", color: "#FF7F3E" }}>Todo.List</h1>
        <br />
      </div>
      <form onSubmit={handleSubmit} className="form-box py-5">
        <InputGroup>
          <Form.Control
            type="text"
            className="inputtext"
            placeholder="Add a todo..."
            value={todoText}
            onChange={(e) => settodoText(e.target.value)}
          />
          <Button variant="outline-primary" type="submit">
            Add Todo
          </Button>
        </InputGroup>
      </form>
    </div>
  );
};

export default TodoForm;
