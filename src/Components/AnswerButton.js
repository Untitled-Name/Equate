import React from "react";
import EquationConstructor from "./EquationConstructor";

export default function AnswerButton (props){

    return (
        <button className="answerButton buttons">
            <EquationConstructor equation={props.question}/>
        </button>
    )
}