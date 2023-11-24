import React from "react";
import "./LeftPanel.css";
import LabelsList from "./LabelsList";

const LeftPanel = ({ setOpenModal, setIsFilterNotes, setClickedLabelId }) => {
  return (
    <>
      <div className="left-panel">
        <button
          onClick={() => setOpenModal((openModal) => !openModal)}
          style={{ cursor: "pointer" }}
          className="create-label-btn"
        >
          Create Label
        </button>
        <LabelsList
          setIsFilterNotes={setIsFilterNotes}
          setClickedLabelId={setClickedLabelId}
        />
      </div>
    </>
  );
};

export default LeftPanel;
