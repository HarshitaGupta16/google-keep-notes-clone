import React, { useCallback, useState } from "react";
import "./AddLabelsOnNote.css";
import { useSelector } from "react-redux";

const AddLabelsOnNote = React.memo(
  ({ selectedLabelIds, setSelectedLabelIds, setIsAddLabelsModalOpen }) => {
    const labels = useSelector((state) => state.labels.labels);

    const selectLabelHandler = useCallback((e) => {
      if (e.target.checked) {
        setSelectedLabelIds((selectedLabelIds) => [
          ...selectedLabelIds,
          e.target.id,
        ]);
      } else if (!e.target.checked) {
        setSelectedLabelIds((selectedLabelIds) => {
          return selectedLabelIds?.filter((labelId) => labelId !== e.target.id);
        });
      }
    }, []);

    return (
      <div className="label-box">
        <div className="label-box-heading">Create Labels</div>
        <div style={{ marginTop: "10px" }}>
          {labels.length > 0 ? (
            labels.map((label) => (
              <div>
                <input
                  type="checkbox"
                  id={label.id}
                  onChange={selectLabelHandler}
                  value={JSON.stringify(label)}
                  checked={selectedLabelIds?.includes(label.id)}
                />
                <label htmlFor={label.id}>{label.name}</label>
              </div>
            ))
          ) : (
            <div className="not-available">No label exists</div>
          )}
        </div>
        <button
          className="done-btn"
          onClick={() => setIsAddLabelsModalOpen(false)}
        >
          Done
        </button>
      </div>
    );
  }
);

export default AddLabelsOnNote;
