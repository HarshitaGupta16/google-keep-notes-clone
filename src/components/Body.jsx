import React, { useState } from "react";
import "./Body.css";
import CreateNote from "./CreateNote";
import { useSelector } from "react-redux";
import DisplayNote from "./DisplayNote";

const Body = () => {
  const [showCreateNote, setShowCreateNote] = useState(false);
  const handleClick = () => {
    setShowCreateNote((showCreateNote) => !showCreateNote);
  };

  const notes = useSelector((state) => state.notes);

  return (
    <div>
      {showCreateNote ? (
        <CreateNote handleClick={handleClick} />
      ) : (
        <div
          style={{ display: "flex", justifyContent: "center" }}
          onClick={handleClick}
        >
          <div className="box">Take a note...</div>
        </div>
      )}

      {/* list all the notes */}
      <div
        style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
      >
        {notes.map((note) => (
          <DisplayNote note={note} key={note} />
        ))}
      </div>
    </div>
  );
};

export default Body;
