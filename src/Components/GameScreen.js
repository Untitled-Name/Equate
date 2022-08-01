import React from "react";
import QuestionDisplay from "./QuestionDisplay";
import Button from "./Button";
import AnswersDisplay from "./AnswersDisplay";
import GenerateQuestion from "./GenerateQuestion";

export default function GameScreen (props) {
    const {difficulty} = props;

    /*
        Difficulty                                                              Easy    Medium  Hard

        Basic algebra                                                           0.90    0.30    0.10 (only 3)
                            ax = b                                              0.30    0.05    0
                            ax + c = b                                          0.30    0.15    0
                            ax + c = b + dx                                     0.30    0.10    0.10

        Quadratic equation  ax^2 + bx + c = d                                   0.10    0.50    0.30

        Differentiation     d/dx f(x) => f(x) = Above                           0       0.10    0.30
        
        Integration         ∫ f'(x) dx                                          0       0.10    0.30
    */

    const getQuestionObj = (difficulty) => {
        let randVal = Math.round(Math.random() * 100) / 100;
        return randVal
    }

    console.log("The difficulty is:", difficulty)
    const currentQuestion = GenerateQuestion(difficulty, 0.50);

    const getDifficulty = (difficulty) => {
        switch (difficulty){
            case "easy": return "Easy";
            case "normal": return "Normal";
            case "hard": return "Hard";
        }
    }

    return (
        <div id="gameScreen" className="flex-container column flex-center flyIn">
            <div id="questionAndAnswersContainer" className="questionAndAnswersContainer inFromRight">
                <QuestionDisplay questionObj={currentQuestion} />
                <AnswersDisplay questionObj={currentQuestion}/>
            </div>
            <Button buttonText={"Back to title"} targetScreen={"titleScreen"} currentScreen={"gameScreen"} leaveAnim={props.leaveAnim}></Button>
            <h3>{getDifficulty(difficulty)} Mode</h3>
        </div>
    )
}