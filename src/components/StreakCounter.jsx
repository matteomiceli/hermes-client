const StreakCounter = ({ streak, inc }) => {
  const boxStyle = {
    height: "120px",
    width: "120px",
    background: "linear-gradient(180deg, #8241F9 0%, #4E277B 100%)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };

  const xStyle = {
    color: "white",
    fontSize: "32px",
    margin: "0",
  };

  return (
    <>
      <div style={boxStyle}>
        <p style={xStyle}>Streak</p>
        <p style={xStyle}>{streak}</p>
      </div>
    </>
  );
};

export default StreakCounter;
