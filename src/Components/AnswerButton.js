import React from "react";
import EquationConstructor from "./EquationConstructor";

export default function AnswerButton (props){
    const {updateStreak, currentStreak} = props

    return (
        <button className="answerButton buttons" onClick={() => {
            props.onAnswer();
            props.removeHeart();
            setTimeout(()=>{updateStreak(currentStreak + 1)}, 600);
            }}>
            <EquationConstructor equation={props.question}/>
        </button>
    )
}