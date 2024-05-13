import { useContext } from "react";
import GameContext from "../utils/GameContext";
import { Questions } from "../utils/constant";

const EndScreen = () => {
  const {userName, score, setScore, setGameState } = useContext(GameContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  }
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>User: {userName}</h3>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndScreen;
