import React from "react";
import AnswerButton from "./AnswerButton";
import EquationConstructor from "./EquationConstructor";

export default function QuestionDisplay (props){
    const {questionObj} = props;

    let randArr = [];
    while (randArr.length < 4){
        let num = Math.floor((Math.random() * 4) + 1);
        if (randArr.indexOf(num) === -1){
            randArr.push(num);
        }
    }

    return (
        <div id="questionAndAnswersContainer" className="questionAndAnswersContainer inFromRight">
            <div id="questionContainer">
                <EquationConstructor equation={questionObj["question"]}/>
            </div>
            <div id="answersContainer" className="flex-container flex-center">
                <AnswerButton question={Object.values(questionObj)[randArr[0]]} onAnswer={props.onAnswer} updateStreak={props.updateStreak} currentStreak={props.currentStreak}/>
                <AnswerButton question={Object.values(questionObj)[randArr[1]]} onAnswer={props.onAnswer} updateStreak={props.updateStreak} currentStreak={props.currentStreak}/>
                <AnswerButton question={Object.values(questionObj)[randArr[2]]} onAnswer={props.onAnswer} updateStreak={props.updateStreak} currentStreak={props.currentStreak}/>
                <AnswerButton question={Object.values(questionObj)[randArr[3]]} onAnswer={props.onAnswer} updateStreak={props.updateStreak} currentStreak={props.currentStreak}/>
            </div>
        </div>
    )
}