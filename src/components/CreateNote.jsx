import React, { useState } from "react";
import "./CreateNote.css";
import { useDispatch } from "react-redux";
import { createNote } from "../features/noteSlice";
import AddLabelsOnNote from "./AddLabelsOnNote";

const CreateNote = ({
  handleClick,
  selectedLabelIds,
  setSelectedLabelIds,
  isAddLabelsModalOpen,
  setIsAddLabelsModalOpen,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const createNoteHandler = () => {
    dispatch(createNote({ title, description, selectedLabelIds }));
    setTitle("");
    setDescription("");
    setSelectedLabelIds([]);
  };

  return (
    <>
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
          <button
            className="footer-btn"
            onClick={() => setIsAddLabelsModalOpen(true)}
          >
            Add label
          </button>
        </div>
      </div>
      {isAddLabelsModalOpen && (
        <AddLabelsOnNote
          selectedLabelIds={selectedLabelIds}
          setSelectedLabelIds={setSelectedLabelIds}
          setIsAddLabelsModalOpen={setIsAddLabelsModalOpen}
        />
      )}
    </>
  );
};

export default CreateNote;
