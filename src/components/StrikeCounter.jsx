const StrikeCounter = () => {
  const boxStyle = {
    height: "200px",
    width: "200px",
    background: "linear-gradient(180deg, #8241F9 0%, #4E277B 100%)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
      alignItems: "center",
    flexDirection: "column"
  };

  const xStyle = {
    color: "white",
    fontSize: "40px",
    margin: "0",
    lineHeight: "60px",
    height: "50px",
  };

  return (
    <>
      <div style={boxStyle}>
        <p style={xStyle}>Streak</p>
        <p style={xStyle}>2</p>
      </div>
    </>
  );
};

export default StrikeCounter;
