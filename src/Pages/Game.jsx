import Box from "../components/Box";
import BoxStrike from "../components/BoxStrike";
import Button from "../components/Button.js";
import StrikeCounter from "../components/StrikeCounter";

const GamePage = () => {
  const container = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
  };

  const strikeContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  };
  return (
    <>
      <div style={container}>
        <StrikeCounter />
        <div style={strikeContainer}>
          <BoxStrike />
          <Box />
          <Box />
        </div>
        <Button />
      </div>
    </>
  );
};

export default GamePage;
