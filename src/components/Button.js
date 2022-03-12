import React from "react";

const buttonStyle = {
  background: "linear-gradient(180deg, #8241F9 0%, #4E277B 100%)",
  position: "absolute",
  height: "50px",
  width: "220px",
  fontSize: "18px",
  borderRadius: "8px",
  padding: "5px 10px",
  border: "1px solid #150A27"
};

const Button = ({ handleClick }) => (
  <button className="btn btn-default" style={buttonStyle} onClick={handleClick}>
    Generate New Quote
  </button>
);

export default Button;
