import React from "react";

const buttonStyle = {
  position: "absolute",
  top: "50px",
  right: "60px",
  margin: "100px ",
  height: "60px",
  width: "140px",
};

const Button = ({ handleClick }) => (
  <button className="btn btn-default" style={buttonStyle} onClick={handleClick}>
    Generate new phrase
  </button>
);

export default Button;
