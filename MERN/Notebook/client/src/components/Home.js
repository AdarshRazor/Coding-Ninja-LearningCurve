import React, { useContext, useState } from "react";
import Notes from "./Notes";
import noteContext from "../context/noteContext";

function Home() {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setnote] = useState({title: "", description: "", tag: "default"})

  const handleclick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag)
  };

  const onChange = (e) => {
    console.log("Clicked asdasdasd");
    setnote({...note, [e.target.name]: e.target.value});
  }

  return (
    <div className="container">
      <div className="my-5">
        <h1>Add a Note</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              onChange={onChange}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleclick}
          >
            Add Note
          </button>
        </form>
      </div>

      <Notes />
    </div>
  );
}

export default Home;
