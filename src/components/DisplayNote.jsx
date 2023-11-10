import React from "react";
import "./DisplayNote.css";
import { useDispatch } from "react-redux";
import { deleteNote } from "../features/noteSlice";

const DisplayNote = ({ note }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {
        <li className="note">
          <h2>{note.title}</h2>
          <div className="note-description">{note.description}</div>
          <div
            className="delete-note"
            onClick={() => dispatch(deleteNote(note.id))}
          >
            🗑
          </div>
        </li>
      }
    </div>
  );
};

export default DisplayNote;
