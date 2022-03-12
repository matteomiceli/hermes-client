import BoxStrike from "../components/BoxStrike";
import Button from "../components/Button";
import StreakCounter from "../components/StreakCounter";
import QuoteButton from "../components/QuoteButton";
import QuoteDisplay from "../components/QuoteDisplay";
import { useState, useEffect } from "react";

const GamePage = () => {
  const [strikes, setStrikes] = useState(0);
  const [streak, setStreak] = useState(0);
  const [gameData, setGameData] = useState(null);

  // game loop
  useEffect(() => {
    // fetch
    if (!gameData) {
      getNewGameData().then((gameData) =>
        setGameData(gameData).then((e) => console.log(e))
      );
    }

    if (strikes === 4) {
      newGame();
    }
  }, [strikes, gameData]);

  function newGame() {
    setGameData(false);
    setStreak(0);
    setStrikes(0);
  }

  function handleFinalAnswer(selected) {}

  function incrementStreak() {
    setStreak(streak + 1);
  }

  async function getNewGameData() {
    const url = "http://localhost:8000/api/newgame/4";
    try {
      const gameReq = await fetch(url);
      return await gameReq.json();
    } catch (error) {
      console.error(error);
    }
  }

  const container = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 60px",
  };

  const quotesContainer = {
    display: "flex",
    justifyContent: "center",
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
        <StreakCounter streak={streak} inc={incrementStreak} />
        <div style={strikeContainer}>
          <BoxStrike strikes={strikes} />
        </div>
        <Button newGame={newGame} />
      </div>
      {gameData ? <QuoteDisplay text={gameData.quote_display} /> : ""}
      {gameData
        ? gameData.quotes.map((quote) => {
            return (
              <div style={quotesContainer}>
                <QuoteButton
                  quote={quote}
                  handleFinalAnswer={handleFinalAnswer}
                />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default GamePage;
