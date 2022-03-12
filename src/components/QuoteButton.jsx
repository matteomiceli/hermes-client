import React from "react";
import CheckMark from "../assets/CheckMark";

function QuoteButton({
  quote = "Good vibes come from good people",
  correct = false,
}) {
  const button = {
    display: "flex",
    justifyContent: "flex-start",
    background: "linear-gradient(180deg, #414141 0%, #303030 100%)",
    alignItem: "center",
    padding: 30,
    paddingLeft: 30,
    paddingRight: 30,
    maxWidth: 600,
    color: "white",
    fontSize: 24,
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
        {correct && <CheckMark />}
      </div>
    </>
  );
}

export default QuoteButton;
