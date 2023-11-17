import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteLabel, editLabel } from "../features/labelSlice";
import "./SingleLabel.css";

const SingleLabel = ({ label, setShowAddIcon }) => {
  const [showDeleteNote, setShowDeleteNote] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editedLabel, setEditedLabel] = useState(label.name);

  const dispatch = useDispatch();

  const editLabelHandler = () => {
    const id = label.id;
    dispatch(editLabel({ id, editedLabel }));
    setIsEdit(false);
  };

  return (
    <div style={{ marginLeft: "55px", display: "flex" }}>
      <span
        className="list-icon"
        onMouseEnter={() => setShowDeleteNote(true)}
        onMouseLeave={() => !showDeleteNote && setShowDeleteNote(false)}
      >
        {!showDeleteNote ? (
          <span>↪</span>
        ) : (
          <span
            onClick={() => dispatch(deleteLabel(label.id))}
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
