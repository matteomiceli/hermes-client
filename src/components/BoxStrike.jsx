const BoxStrike = ({ strikes }) => {
  const boxStyle = {
    height: "50px",
    width: "50px",
    backgroundColor: "#2e2e2e",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "2px solid white",
    margin: "20px",
  };

  const xStyle = {
    color: "red",
    fontSize: "80px",
    margin: "0",
    lineHeight: "20px",
    height: "40px",
  };

  return (
    <>
      <div style={boxStyle}>{strikes >= 1 ? <p style={xStyle}>x</p> : ""}</div>
      <div style={boxStyle}>{strikes >= 2 ? <p style={xStyle}>x</p> : ""}</div>
      <div style={boxStyle}>{strikes >= 3 ? <p style={xStyle}>x</p> : ""}</div>
    </>
  );
};

export default BoxStrike;
