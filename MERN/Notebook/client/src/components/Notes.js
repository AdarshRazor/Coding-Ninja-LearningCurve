import React, { useContext } from "react";
import noteContext from "../context/noteContext";

function Notes() {
  // Get context from noteContext
  const context = useContext(noteContext);
  // destructure context
  const { notes, deleteNote } = context;
  
  return (
    <div className="row my-3">
      <h1>Your Notes</h1>
      {notes.map((note) => (
        <div className="col-md-3">
          <div key={note._id} className="card my-3">
            <div className="card-body">
              <h5 className="card-title" style={{ fontWeight: "bold" }}>
                {note.title}
              </h5>
              <p className="card-text">{note.description}</p>
              <i className="fa-solid fa-trash-can m-2" onClick={()=> {deleteNote(note._id)}}></i>
              <i className="fa-regular fa-pen-to-square m-2"></i>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
