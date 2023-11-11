import React, { useState } from "react";
import "./DisplayNote.css";
import { useDispatch } from "react-redux";
import { deleteNote, editNote } from "../features/noteSlice";

const DisplayNote = ({ note }) => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(note?.title);
  const [newDescription, setNewDescription] = useState(note?.description);

  const editHandler = () => {
    const id = note.id;
    dispatch(editNote({ id, newTitle, newDescription }));
    setIsEdit((isEdit) => !isEdit);
  };

  return (
    <div>
      {!isEdit ? (
        <li className="note">
          <h2>{note?.title}</h2>
          <div className="note-description">{note?.description}</div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className="delete-note"
              onClick={() => dispatch(deleteNote(note.id))}
            >
              🗑
            </button>
            <button
              onClick={() => setIsEdit((isEdit) => !isEdit)}
              className="edit-note"
            >
              📝
            </button>
          </div>
        </li>
      ) : (
        <li className="note">
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="title"
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="description"
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={editHandler} className="edit-note">
              ✔
            </button>
          </div>
        </li>
      )}
    </div>
  );
};

export default DisplayNote;
