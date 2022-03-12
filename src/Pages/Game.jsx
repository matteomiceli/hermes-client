import Box from "../components/Box";
import BoxStrike from "../components/BoxStrike";
import Button from "../components/Button.js";
import StrikeCounter from "../components/StrikeCounter";

const GamePage = () => {
  return (
    <>
          <h1>Game</h1>
          <StrikeCounter />
          <Box />
          <BoxStrike />
         <Button />
    </>
  );
};

export default GamePage;
