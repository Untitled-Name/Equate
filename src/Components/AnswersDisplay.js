import React from "react";
import AnswerButton from "./AnswerButton";

export default function AnswersDisplay (props){
    const {questionObj} = props;

    return (
        <div id="answersContainer" className="flex-container flex-center">
            <AnswerButton question={questionObj["correctAns"]}/>
            <AnswerButton question={questionObj["wrongAns1"]}/>
            <AnswerButton question={questionObj["wrongAns2"]}/>
            <AnswerButton question={questionObj["wrongAns3"]}/>
        </div>
    )
}