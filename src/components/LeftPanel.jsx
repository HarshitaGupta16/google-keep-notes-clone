import React, { useState } from "react";
import "./LeftPanel.css";
import LabelsList from "./LabelsList";

const LeftPanel = ({ setOpenModal, openModal }) => {
  return (
    <>
      <div className="left-panel">
        <button onClick={() => setOpenModal((openModal) => !openModal)}>
          Create Label
        </button>
        <LabelsList />
      </div>
    </>
  );
};

export default LeftPanel;
