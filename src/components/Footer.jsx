import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span>© Harshita Gupta</span>
      <div style={{ display: "flex" }}>
        <a
          href="https://harshitagupta.vercel.app/"
          className="link"
          target="_blank"
        >
          🌐
        </a>
        <a
          className="link"
          target="_blank"
          href="https://www.linkedin.com/in/harshita-gupta-549b12157/"
        >
          <img src="icons-linkedin.png" height={25} />
        </a>
        <a
          className="link"
          target="_blank"
          href="https://twitter.com/Harshita16Gupta"
        >
          <img src="twitter.png" height={20} style={{ marginTop: "3px" }} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
