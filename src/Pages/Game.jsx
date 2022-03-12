import Box from "../components/Box";
import BoxStrike from "../components/BoxStrike";
import Button from "../components/Button";
import StrikeCounter from "../components/StrikeCounter";
import QuoteButton from "../components/QuoteButton";
import { useState, useEffect } from "react";

const GamePage = () => {
  const [strikes, setStrikes] = useState(0);
  const [streak, setStreak] = useState(0);

  // game loop
  useEffect(async () => {
    // fetch
    const gameData = await getGameData();
    console.log(gameData);

    if (strikes === 3) {
      newGame();
    }
  }, [strikes]);

  function newGame() {
    setStreak(0);
    setStrikes(0);
  }

  async function getGameData() {}

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
        <StrikeCounter streak={streak} />
        <div style={strikeContainer}>
          <BoxStrike />
          <Box />
          <Box />
        </div>
        <Button />
        {/* <QuoteButton /> */}
      </div>
    </>
  );
};

export default GamePage;
