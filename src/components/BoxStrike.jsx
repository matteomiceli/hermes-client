const BoxStrike = () => {
  const boxStyle = {
    height: "60px",
    width: "60px",
    backgroundColor: "black",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "3px solid white",
  };

  const xStyle = {
    color: "white",
    fontSize: "80px",
    margin: "0",
    lineHeight: "20px",
    height: "40px",
  };

  return (
    <>
      <div style={boxStyle}>
        <p style={xStyle}>x</p>
      </div>
    </>
  );
};

export default BoxStrike;
