import React, { useState } from "react";
import "./Body.css";
import CreateNote from "./CreateNote";

const Body = () => {
  const [showCreateNote, setShowCreateNote] = useState(false);
  const handleClick = () => {
    setShowCreateNote((showCreateNote) => !showCreateNote);
  };

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
    </div>
  );
};

export default Body;
