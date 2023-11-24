import React, { useCallback, useState } from "react";
import "./DisplayNote.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote, editNote } from "../features/noteSlice";
import AddLabelsOnNote from "./AddLabelsOnNote";
import ColorPalette from "./ColorPalette";

const DisplayNote = ({ note, selectedLabelIds, setSelectedLabelIds }) => {
  const dispatch = useDispatch();

  const [isEdit, setIsEdit] = useState(false);
  const [newTitle, setNewTitle] = useState(note?.title);
  const [newDescription, setNewDescription] = useState(note?.description);
  const [showRemoveLabel, setShowRemoveLabel] = useState(false);
  const [newLabelIds, setNewLabelIds] = useState(
    selectedLabelIds.length > 0 ? selectedLabelIds : []
  );
  const [isAddLabelsModalOpen, setIsAddLabelsModalOpen] = useState(false);
  const [openColorPalette, setOpenColorPalette] = useState(false);
  const [bgColor, setBgColor] = useState("");

  const labels = useSelector((state) => state.labels.labels);

  const editHandler = () => {
    const id = note.id;
    dispatch(editNote({ id, newTitle, newDescription, newLabelIds, bgColor }));
    setIsEdit((isEdit) => !isEdit);
  };

  const removeLabelHandler = (id) => {
    setNewLabelIds(note.labelIds.filter((labelId) => labelId !== id));
  };

  const isArrayEqual = (a, b) => {
    return JSON.stringify(a) === JSON.stringify(b);
  };
  const handleSetSelectedLabelIds = useCallback(
    (newIds) => {
      if (!isArrayEqual(selectedLabelIds, newIds)) {
        setSelectedLabelIds(newIds);
        setNewLabelIds(newIds);
      }
    },
    [selectedLabelIds, setSelectedLabelIds]
  );

  return (
    <div>
      {!isEdit ? (
        <li
          className="note"
          style={{ backgroundColor: note.bgColor ? note.bgColor : "white" }}
        >
          <h2
            style={{
              backgroundColor: note.bgColor ? note.bgColor : "white",
              margin: 0,
              marginBottom: 10,
            }}
          >
            {note?.title}
          </h2>
          <div
            className="note-description"
            style={{
              backgroundColor: note.bgColor ? note.bgColor : "white",
              margin: 10,
            }}
          >
            {note?.description}
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", position: "relative" }}
          >
            {newLabelIds?.map((labelId) => {
              const label = labels.find((label) => label.id === labelId);
              return (
                label && (
                  <div className="label-name">
                    <span>{label.name}</span>
                  </div>
                )
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              className="delete-note"
              onClick={() => dispatch(deleteNote({ id: note.id }))}
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
        <li
          className="note"
          style={{ backgroundColor: bgColor ? bgColor : note.bgColor }}
        >
          <input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className="title"
            style={{ backgroundColor: bgColor ? bgColor : note.bgColor }}
          />
          <textarea
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="description"
            style={{ backgroundColor: bgColor ? bgColor : note.bgColor }}
          />
          <div
            style={{ display: "flex", flexWrap: "wrap", position: "relative" }}
          >
            {newLabelIds.map((labelId) => {
              const label = labels.find((label) => label.id === labelId);
              return (
                <div
                  className={
                    !showRemoveLabel ? "label-name" : "label-name label-padding"
                  }
                  onMouseEnter={() => setShowRemoveLabel(true)}
                  onMouseLeave={() => setShowRemoveLabel(false)}
                >
                  <span>{label?.name}</span>
                  {showRemoveLabel && (
                    <span
                      style={{
                        backgroundColor: "rgb(187,187,187)",
                        padding: "2px 5px",
                        borderRadius: "50%",
                        marginLeft: "5px",
                      }}
                      onClick={() => removeLabelHandler(label.id)}
                    >
                      ×
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={editHandler} className="edit-note">
              ✔
            </button>
            <button
              className="edit-note"
              style={{ marginLeft: 10 }}
              onClick={() => {
                setIsAddLabelsModalOpen(
                  (isAddLabelsModalOpen) => !isAddLabelsModalOpen
                );
              }}
            >
              <i className="fa fa-plus"></i>
            </button>
            <button
              className="edit-note"
              onClick={() => setOpenColorPalette(true)}
            >
              <img
                src="palette-solid.svg"
                height={15}
                width={15}
                color="gray"
              />
            </button>
            {isAddLabelsModalOpen && (
              <AddLabelsOnNote
                selectedLabelIds={newLabelIds}
                setSelectedLabelIds={handleSetSelectedLabelIds}
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
        </li>
      )}
    </div>
  );
};

export default DisplayNote;
