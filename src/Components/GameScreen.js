import React, { useState } from "react";
import Button from "./Button";
import QuestionDisplay from "./QuestionDisplay";
import GenerateQuestion from "./GenerateQuestion";

export default function GameScreen (props) {
    const {difficulty} = props;

    const [currentStreak, updateStreak] = useState(0);

    const toNextQuestion = () => {
        document.getElementById("questionAndAnswersContainer").classList.remove("inFromRight");
        document.getElementById("questionAndAnswersContainer").classList.add("outToLeft");
        setTimeout(()=>{
            document.getElementById("questionAndAnswersContainer").classList.remove("outToLeft");
            document.getElementById("questionAndAnswersContainer").classList.add("inFromRight");
            currentQuestion = GenerateQuestion(difficulty, getRand(difficulty));
        }, 600);
    }

    const getRand = (difficulty) => {
        let randVal = Math.round(Math.random() * 100) / 100;
        return randVal
    }

    let currentQuestion = GenerateQuestion(difficulty, getRand(difficulty));

    const getDifficulty = (difficulty) => {
        switch (difficulty){
            case "easy": return "Easy";
            case "normal": return "Normal";
            case "hard": return "Hard";
        }
    }

    return (
        <div id="gameScreen" className="flex-container column flex-center flyIn">
            <h3>Current Streak: {currentStreak}</h3>
            <QuestionDisplay questionObj={currentQuestion} onAnswer={toNextQuestion} updateStreak={updateStreak} currentStreak={currentStreak}/>
            <Button buttonText={"Back to title"} targetScreen={"titleScreen"} currentScreen={"gameScreen"} leaveAnim={props.leaveAnim}></Button>
            <h3>{getDifficulty(difficulty)} Mode</h3>
        </div>
    )
}