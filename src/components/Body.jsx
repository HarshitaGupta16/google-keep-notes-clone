import React, { useState } from "react";
import "./Body.css";
import CreateNote from "./CreateNote";
import { useSelector } from "react-redux";
import DisplayNote from "./DisplayNote";
import LeftPanel from "./LeftPanel";
import Modal from "./common/Modal";

const Body = () => {
  const [showCreateNote, setShowCreateNote] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleClick = () => {
    setShowCreateNote((showCreateNote) => !showCreateNote);
  };

  const notes = useSelector((state) => state.notes.notes);
  console.log(notes);

  localStorage.setItem("notes", JSON.stringify(notes.map((note) => note)));

  return (
    <>
      <div style={{ display: "flex", height: "89vh" }}>
        <LeftPanel setOpenModal={setOpenModal} openModal={openModal} />
        <div style={{ width: "90%" }}>
          {showCreateNote ? (
            <CreateNote handleClick={handleClick} />
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={handleClick}
            >
              <div className="box">Take a note...</div>
            </div>
          )}

          {/* list all the notes */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {notes?.map((note) => (
              <DisplayNote note={note} key={note} />
            ))}
          </div>
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} openModal={openModal} />}
    </>
  );
};

export default Body;
