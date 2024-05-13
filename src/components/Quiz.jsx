import { useContext, useState } from "react";
import GameContext from "../utils/GameContext";
import { Questions } from "../utils/constant";

const Quiz = () => {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const {userName, score, setScore, setGameState} = useContext(GameContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const previousQuestion = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  }

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setGameState("endScreen");
  }

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button onClick={() => chooseOption("optionA")}>{Questions[currentQuestion].optionA}</button>
        <button onClick={() => chooseOption("optionB")}>{Questions[currentQuestion].optionB}</button>
        <button onClick={() => chooseOption("optionC")}>{Questions[currentQuestion].optionC}</button>
        <button onClick={() => chooseOption("optionD")}>{Questions[currentQuestion].optionD}</button>
      </div>
      {
        currentQuestion == Questions.length - 1 ? (
          <button onClick={finishQuiz} id="nextQuestion">Finish Quiz</button>
        ) : (
          <button onClick={nextQuestion} id="nextQuestion">Next Question</button>
        )
      }
    </div>
  );
};

export default Quiz;