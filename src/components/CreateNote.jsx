import React, { useState } from "react";
import "./CreateNote.css";
import { useDispatch } from "react-redux";
import { createNote } from "../features/noteSlice";
import AddLabelsOnNote from "./AddLabelsOnNote";
import ColorPalette from "./ColorPalette";

const CreateNote = ({ handleClick, selectedLabelIds, setSelectedLabelIds }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isAddLabelsModalOpen, setIsAddLabelsModalOpen] = useState(false);
  const [bgColor, setBgColor] = useState("");
  const [openColorPalette, setOpenColorPalette] = useState(false);

  const dispatch = useDispatch();

  const createNoteHandler = () => {
    dispatch(createNote({ title, description, selectedLabelIds, bgColor }));
    setTitle("");
    setDescription("");
    setSelectedLabelIds([]);
    setBgColor("");
  };

  return (
    <>
      <div className="create-note-box" style={{ backgroundColor: bgColor }}>
        <input
          placeholder="Title"
          className="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          style={{ backgroundColor: bgColor }}
        />
        <textarea
          className="description"
          placeholder="Take a note..."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          style={{ backgroundColor: bgColor }}
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
          <button
            className="footer-btn"
            onClick={() => setOpenColorPalette(true)}
          >
            <img src="palette-solid.svg" height={20} width={20} color="gray" />
          </button>
        </div>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {isAddLabelsModalOpen && (
          <AddLabelsOnNote
            selectedLabelIds={selectedLabelIds}
            setSelectedLabelIds={setSelectedLabelIds}
            setIsAddLabelsModalOpen={setIsAddLabelsModalOpen}
          />
        )}
        {openColorPalette && (
          <ColorPalette
            setBgColor={setBgColor}
            setOpenColorPalette={setOpenColorPalette}
          />
        )}
      </div>
    </>
  );
};

export default CreateNote;
