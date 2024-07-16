import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const noteslist = [
    {
      _id: "6694214473d1ac30337654c63",
      user: "668d85a39b6708783381f4d2",
      title: "My Titsdfsdfsdfsdfsfle",
      description: "Hey there thsdfsdfsdfsdfhor",
      tag: "personal",
      date: "2024-07-14T19:04:36.501Z",
      __v: 0,
    },
    {
      _id: "6696837169956f959cc55db53",
      user: "668d85a39b6708783381f4d2",
      title: "My title 3",
      description:
        "something random i have written here something random i have written here something random i have written here",
      tag: "personal",
      date: "2024-07-16T14:43:34.518Z",
      __v: 0,
    },
    {
      _id: "6694214473d1ac30373654c63",
      user: "668d85a39b6708783381f4d2",
      title: "My Titsdfsdfsdfsdfsfle",
      description: "Hey there thsdfsdfsdfsdfhor",
      tag: "personal",
      date: "2024-07-14T19:04:36.501Z",
      __v: 0,
    },
    {
      _id: "66942314473d1ac3037654c63",
      user: "668d85a39b6708783381f4d2",
      title: "My Titsdfsdfsdfsdfsfle",
      description: "Hey there thsdfsdfsdfsdfhor",
      tag: "personal",
      date: "2024-07-14T19:04:36.501Z",
      __v: 0,
    },
    {
      _id: "6696870c9956f959cc55db251",
      user: "668d85a39b6708783381f4d2",
      title: "My title 2",
      description: "something random i have written here",
      tag: "personal",
      date: "2024-07-16T14:43:24.427Z",
      __v: 0,
    },
    {
      _id: "669687169956f9549cc55db53",
      user: "668d85a39b6708783381f4d2",
      title: "My title 3",
      description:
        "something random i have written here",
      tag: "personal",
      date: "2024-07-16T14:43:34.518Z",
      __v: 0,
    },
    {
      _id: "6694214473d1ac30376554c63",
      user: "668d85a39b6708783381f4d2",
      title: "My Titsdfsdfsdfsdfsfle",
      description: "Hey there thsdfsdfsdfsdfhor",
      tag: "personal",
      date: "2024-07-14T19:04:36.501Z",
      __v: 0,
    },
    {
      _id: "66942144723d1ac3037654c63",
      user: "668d85a39b6708783381f4d2",
      title: "My Titsdfsdfsdfsdfsfle",
      description: "Hey there thsdfsdfsdfsdfhor",
      tag: "personal",
      date: "2024-07-14T19:04:36.501Z",
      __v: 0,
    },
    {
      _id: "669687169956f959cc556db53",
      user: "668d85a39b6708783381f4d2",
      title: "My title 3",
      description:
        "something random i have written here something random i have written here something random i have written here",
      tag: "personal",
      date: "2024-07-16T14:43:34.518Z",
      __v: 0,
    },
  ];

  const [notes, setnotes] = useState(noteslist)

  // Add a note
   const addNote = (title, desc, tag) => {
    const note = {
      _id: "669687169956f78959cc556db53",
      user: "668d85a39b6708783381f4d2",
      title: title,
      description:
        desc,
      tag: tag,
      date: "2024-07-16T14:43:34.518Z",
      __v: 0,
    }
    setnotes(notes.concat(note))
   }

  // Delete a note
  const deleteNote = (id) => {
    // Filter the notes array to keep only the ones that don't match the given id
    const newNotes = notes.filter((note) => {
      return note._id!==id
    })
    setnotes(newNotes)
  }

  // Edit a Note
  const editNote = (id, title, description, tag) => {
    
  }

  return (
    <noteContext.Provider value={{ notes, setnotes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
