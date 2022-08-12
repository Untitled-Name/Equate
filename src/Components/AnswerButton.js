import React from "react";
import EquationConstructor from "./EquationConstructor";

export default function AnswerButton (props){
    return (
        <button className="answerButton buttons" onClick={() => {
            props.checkAns(props.question, props.correctAns)
            props.onAnswer();
            }}>
            <EquationConstructor equation={props.question}/>
        </button>
    )
}