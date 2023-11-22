import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteLabel, editLabel } from "../features/labelSlice";
import "./SingleLabel.css";
import { removeNoteLabel } from "../features/noteSlice";

const SingleLabel = ({ label, setShowAddIcon }) => {
  const [showDeleteNote, setShowDeleteNote] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editedLabel, setEditedLabel] = useState(label.name);

  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.notes);

  const editLabelHandler = () => {
    const id = label.id;
    dispatch(editLabel({ id, editedLabel }));
    setIsEdit(false);
  };

  const deleteLabelHandler = (labelId) => {
    dispatch(deleteLabel({ id: labelId }));
    notes.map((note) => {
      const filteredLabelIds = note?.labelIds?.filter((lId) => lId !== labelId);
      console.log(filteredLabelIds);
      dispatch(
        removeNoteLabel({ id: note.id, filteredLabelIds: filteredLabelIds })
      );
    });
  };

  return (
    <div style={{ marginLeft: "55px", display: "flex" }}>
      <span
        className="list-icon"
        onMouseEnter={() => setShowDeleteNote(true)}
        onMouseLeave={() =>
          !showDeleteNote &&
          setShowDeleteNote((showDeleteNote) => !showDeleteNote)
        }
      >
        {!showDeleteNote ? (
          <span>↪</span>
        ) : (
          <span
            onClick={() => deleteLabelHandler(label.id)}
            className="delete-icon"
          >
            <i className="fa fa-trash"></i>
          </span>
        )}
      </span>
      <div className="label-name-edit">
        {!isEdit ? (
          <>
            <span>{label.name}</span>
            <span
              className="edit-label"
              onClick={() => {
                setIsEdit(true);
                setShowAddIcon(true);
                setShowDeleteNote(true);
              }}
            >
              <i className="fa fa-pencil"></i>
            </span>
          </>
        ) : (
          <>
            <input
              value={editedLabel}
              onChange={(e) => setEditedLabel(e.target.value)}
              className="edit-input"
            />
            <span className="edit-label" onClick={editLabelHandler}>
              ✔
            </span>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleLabel;
