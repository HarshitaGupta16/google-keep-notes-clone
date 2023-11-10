import React from "react";
import "./DisplayNote.css";

const DisplayNote = ({ note }) => {
  return (
    <div>
      {
        <li className="note">
          <h2>{note.title}</h2>
          <div className="note-description">{note.description}</div>
        </li>
      }
    </div>
  );
};

export default DisplayNote;
