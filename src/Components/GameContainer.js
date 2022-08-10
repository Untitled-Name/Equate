import React, { useState } from "react";
import Button from "./Button";
import QuestionDisplay from "./QuestionDisplay";
import GenerateQuestion from "./GenerateQuestion";

export default function GameContainer (props) {
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

    return (
        <div id="gameAndInfoContainer" className="inFromRight hide">
            <div id="topRightContainer">
                <div id="livesAndTimerContainer" className=""></div>
            </div>
            <div id="gameContainer" className="flex-container column flex-center">
                <h3>Current Streak: {currentStreak}</h3>
                <QuestionDisplay questionObj={currentQuestion} onAnswer={toNextQuestion} updateStreak={updateStreak} currentStreak={currentStreak} removeHeart={props.removeHeart}/>
                <Button buttonText={"Back to title"} targetScreen={"titleScreen"} currentScreen={"gameScreen"} changeScreen={props.changeScreen} />
                <h3>{difficulty} Mode</h3>
            </div>
        </div>

    )
}