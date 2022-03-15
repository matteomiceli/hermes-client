import BoxStrike from "../components/BoxStrike";
import Button from "../components/Button";
import StreakCounter from "../components/StreakCounter";
import QuoteButton from "../components/QuoteButton";
import QuoteDisplay from "../components/QuoteDisplay";
import { useState, useEffect } from "react";
import useStreakHook from "../Hooks/useStreakHook";

const GamePage = () => {
  const [strikes, setStrikes] = useState(0);
  const [streak, setStreak] = useState(0);
  const [gameData, setGameData] = useState(null);
  const [gameState, setGameState] = useState(null);

  // game loop
  useEffect(() => {
    if (!gameData) {
      if (gameState === "congrats") {
        setTimeout(() => {
          setGameState(null);
        }, 1000);
      }
      getNewGameData().then((gameData) =>
        setGameData(gameData).catch((e) => console.error(e))
      );
    }
  }, [gameData]);

  useEffect(() => {
    if (strikes === 3) {
      setTimeout(() => {
        setGameState(null);
      }, 2000);
      setGameState("oof");
      newGame();
    }
  }, [strikes]);
  const [streakTab, setStreakTab] = useStreakHook(); // by using hook we extract state
  useEffect(() => {
    if (gameState === "congrats") {
      setGameData(null);
    }
  }, [streak, gameState]);

  function newGame() {
    setStreakTab(0);
    setStreak(0);
    setStrikes(0);
    setGameData(null);
  }

  function handleFinalAnswer(selected) {
    if (selected === gameData.answer) {
      setGameState("congrats");
      incrementStreak();
    } else {
      incrementStrikes();
    }
  }
  
  function incrementStreak() {
    setStreakTab(streak)
    setStreak(streak + 1);
  }
  function incrementStrikes() {
    setStrikes(strikes + 1);
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
        <StreakCounter
          streak={streak}
          streakTab={streakTab}
          setStreakTab={setStreakTab}
          inc={incrementStreak}
        />
        <div style={strikeContainer}>
          <BoxStrike strikes={strikes} />
        </div>
        <Button newGame={newGame} />
      </div>
      {gameState === "congrats" ? (
        <h1 style={{ color: "white", textAlign: "center" }}>Correct!</h1>
      ) : (
        ""
      )}
      {gameState === "oof" ? (
        <h1 style={{ color: "red", textAlign: "center" }}>You lose!</h1>
      ) : (
        ""
      )}
      {gameData && !gameState ? (
        <QuoteDisplay text={gameData.quote_display} />
      ) : (
        ""
      )}
      {gameData && !gameState ? (
        gameData.quotes.map((quote) => {
          return (
            <div style={quotesContainer}>
              <QuoteButton
                quote={quote}
                answer={gameData.answer}
                handleFinalAnswer={handleFinalAnswer}
                key={quote}
              />
            </div>
          );
        })
      ) : (
        <p
          style={{
            color: "white",
            textAlign: "center",
            fontSize: 24,
            paddingTop: 200,
          }}
        >
          Loading translation...
        </p>
      )}
    </>
  );
};

export default GamePage;
