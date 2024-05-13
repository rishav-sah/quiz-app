import { useState } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import GameContext from "./utils/GameContext";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <GameContext.Provider
      value={{
        gameState,
        setGameState,
        userName,
        setUserName,
        score,
        setScore
      }}
    >
      <div className="App">
        <h1>Quiz App</h1>
        {gameState == "menu" && <MainMenu />}
        {gameState == "quiz" && <Quiz />}
        {gameState == "endScreen" && <EndScreen />}
      </div>
    </GameContext.Provider>
  );
};

export default App;
