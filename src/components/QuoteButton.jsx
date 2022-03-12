import React from "react";
import CheckMark from "../assets/CheckMark";

function QuoteButton({
  quote = "Good vibes come from good people",
  handleFinalAnswer,
}) {
  const button = {
    display: "flex",
    justifyContent: "flex-start",
    background: "linear-gradient(180deg, #414141 0%, #303030 100%)",
    alignItem: "center",
    textAlign: "center",
    padding: 30,
    paddingLeft: 30,
    paddingRight: 30,
    margin: "8px 0",
    width: 600,
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    cursor: "pointer",
    borderRadius: 15,
  };
  const span = {
    flexGrow: 5,
  };
  const div = {
    flexGrow: 1,
  };
  return (
    <>
      <div style={button}>
        <span style={span}>{quote}</span>
      </div>
    </>
  );
}

export default QuoteButton;
