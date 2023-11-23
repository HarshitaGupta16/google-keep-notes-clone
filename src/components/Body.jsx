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
  const [isFilterNotes, setIsFilterNotes] = useState(false);
  const [clickedLabelId, setClickedLabelId] = useState("");
  const [selectedLabelIds, setSelectedLabelIds] = useState([]);

  const handleClick = () => {
    setShowCreateNote((showCreateNote) => !showCreateNote);
  };

  const notes = useSelector((state) => state.notes.notes);
  console.log(notes);

  localStorage.setItem("notes", JSON.stringify(notes.map((note) => note)));

  return (
    <>
      <div style={{ display: "flex", height: "89vh" }}>
        <LeftPanel
          setOpenModal={setOpenModal}
          setIsFilterNotes={setIsFilterNotes}
          setClickedLabelId={setClickedLabelId}
        />
        <div style={{ width: "90%" }}>
          {showCreateNote ? (
            <CreateNote
              handleClick={handleClick}
              selectedLabelIds={selectedLabelIds}
              setSelectedLabelIds={setSelectedLabelIds}
            />
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
            {isFilterNotes
              ? notes?.map((note) => {
                  if (note?.labelIds?.includes(clickedLabelId)) {
                    return (
                      <DisplayNote
                        note={note}
                        key={note.id}
                        isFilterNotes={isFilterNotes}
                        selectedLabelIds={
                          note?.labelIds?.length > 0 ? note.labelIds : []
                        }
                        setSelectedLabelIds={setSelectedLabelIds}
                      />
                    );
                  }
                })
              : notes.map((note) => (
                  <DisplayNote
                    key={note.id}
                    note={note}
                    isFilterNotes={isFilterNotes}
                    selectedLabelIds={
                      note?.labelIds?.length > 0 ? note.labelIds : []
                    }
                    setSelectedLabelIds={setSelectedLabelIds}
                  />
                ))}
          </div>
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Body;
