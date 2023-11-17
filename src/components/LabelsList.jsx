import React from "react";
import "./LabelsList.css";

const LabelsList = () => {
  const labels =
    localStorage.getItem("labels") !== null
      ? JSON.parse(localStorage.getItem("labels"))
      : [];

  return (
    <div className="list">
      {labels?.map((label) => (
        <li key={label?.id} className="list-item">
          <span className="right-arrow">→</span>
          <span>{label?.name}</span>
        </li>
      ))}
    </div>
  );
};

export default LabelsList;
