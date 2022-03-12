import React from "react";

const Button = ({ handleClick }) => (
  <button className="btn btn-default" onClick={handleClick}>
    Generate new phrase
  </button>
);

export default Button;
