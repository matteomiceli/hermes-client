const Box = () => {
  const boxStyle = {
    height: "60px",
    width: "60px",
    backgroundColor: "#2e2e2e",
    borderRadius: "8px",
      border: "2px solid white",
    margin: "20px"
  };

  return (
    <>
      <div style={boxStyle}></div>
    </>
  );
};

export default Box;
