import React from "react";

const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      <img src="./keeps.png" width={40} height={40} />
      <h1
        style={{
          marginLeft: 30,
          color: "#5f6368",
          marginTop: 2,
          fontWeight: "normal",
        }}
      >
        Keep
      </h1>
    </div>
  );
};

export default Header;
