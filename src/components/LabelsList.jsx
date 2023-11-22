import React from "react";
import "./LabelsList.css";

const LabelsList = ({ setIsFilterNotes, setClickedLabelId }) => {
  const labels =
    localStorage.getItem("labels") !== null
      ? JSON.parse(localStorage.getItem("labels"))
      : [];

  return (
    <div className="list">
      {labels?.map((label) => (
        <li
          key={label?.id}
          className="list-item"
          onClick={() => {
            setIsFilterNotes(true);
            setClickedLabelId(label.id);
          }}
        >
          <span>{label?.name}</span>
        </li>
      ))}
    </div>
  );
};

export default LabelsList;
