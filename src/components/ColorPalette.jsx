import React from "react";
import "./ColorPalette.css";

const ColorPalette = ({ setBgColor, setOpenColorPalette }) => {
  const colors = [
    "coral",
    "#f39f76",
    "#fff8b8",
    "#e2f6d3",
    "#b4ddd3",
    "#d4e4ed",
    "#aeccdc",
    "#d3bfdb",
  ];
  return (
    <div className="outer-box">
      <div className="palette-box">
        <div
          className="color-ball bgColor"
          onClick={() => setBgColor("white")}
        ></div>
        {colors.map((color) => (
          <div
            className="color-ball"
            style={{ backgroundColor: color }}
            onClick={() => setBgColor(color)}
          ></div>
        ))}
      </div>
      <button className="done-btn" onClick={() => setOpenColorPalette(false)}>
        Done
      </button>
    </div>
  );
};

export default ColorPalette;
