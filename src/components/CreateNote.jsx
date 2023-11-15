import React, { useState } from "react";
import "./CreateNote.css";
import { useDispatch } from "react-redux";
import { createNote } from "../features/noteSlice";

const CreateNote = ({ handleClick }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const createNoteHandler = () => {
    dispatch(createNote({ title, description }));
    setTitle("");
    setDescription("");
  };

  return (
    <div className="create-note-box">
      <input
        placeholder="Title"
        className="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <textarea
        className="description"
        placeholder="Take a note..."
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      />
      <div style={{ display: "flex" }}>
        <button className="footer-btn" onClick={createNoteHandler}>
          Create
        </button>
        <button className="footer-btn" onClick={handleClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
