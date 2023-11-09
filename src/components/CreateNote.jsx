import React, { useState } from "react";
import "./CreateNote.css";

const CreateNote = ({ handleClick }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="create-note-box">
      <input
        placeholder="Title"
        className="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="description"
        placeholder="Take a note..."
        onChange={(e) => setDescription(e.target.value)}
      />
      <div style={{ display: "flex" }}>
        <button className="footer-btn">Create</button>
        <button className="footer-btn" onClick={handleClick}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
