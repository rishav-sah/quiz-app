import { useContext } from "react";
import GameContext from "../utils/GameContext";

const MainMenu = () => {
  
  const {username, setUserName, setGameState } = useContext(GameContext);

  return (
    <div className="Menu">
      <input type="text" placeholder="Enter your name" value={username} onChange={(e) => setUserName(e.target.value) }/>
      <button onClick={() => setGameState("quiz")}>Start Quiz</button>
    </div>
  );
};

export default MainMenu;