import React from "react";
import EquationConstructor from "./EquationConstructor";

export default function QuestionDisplay (props) {
    const {questionObj} = props;
    return (
        <div id="questionContainer">
           <EquationConstructor equation={questionObj["question"]}/>
        </div>
    )
}