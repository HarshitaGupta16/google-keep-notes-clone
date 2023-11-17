import { useState } from "react";
import "./Modal.css";
import { useDispatch, useSelector } from "react-redux";
import { createLabel } from "../../features/labelSlice";
import SingleLabel from "../SingleLabel";

const Modal = ({ openModal, setOpenModal }) => {
  const [label, setLabel] = useState("");
  const [showAddIcon, setShowAddIcon] = useState(false);

  const dispatch = useDispatch();
  const labels = useSelector((state) => state.labels.labels);
  console.log(labels);
  localStorage.setItem("labels", JSON.stringify(labels.map((label) => label)));

  const createLabelHandler = () => {
    dispatch(createLabel(label));
    setLabel("");
  };

  return (
    <div className="container">
      <div className="dialog">
        <div className="dialog-heading">Create Labels</div>
        {!showAddIcon ? (
          <div className="dialog-input">
            <button className="close-icon" onClick={() => setShowAddIcon(true)}>
              ×
            </button>
            <input
              placeholder="Create new label"
              className="label-input"
              onChange={(e) => setLabel(e.target.value)}
              value={label}
            />
            <button className="tick-icon" onClick={createLabelHandler}>
              ✔
            </button>
          </div>
        ) : (
          <div className="add-dialog-heading">
            <span className="add-icon" onClick={() => setShowAddIcon(false)}>
              +
            </span>
            <span style={{ color: "darkslategray" }}>Create new label</span>
          </div>
        )}
        <div style={{ overflow: "auto", height: "60px" }}>
          {labels.map((item) => (
            <SingleLabel
              label={item}
              key={item.id}
              setShowAddIcon={setShowAddIcon}
            />
          ))}
        </div>
        <button className="done-btn" onClick={() => setOpenModal(false)}>
          Done
        </button>
      </div>
    </div>
  );
};

export default Modal;
