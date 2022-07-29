import React from "react";
import QuestionDisplay from "./QuestionDisplay";

export default function GameScreen (props) {
    const {difficulty} = props;

    const getQuestionObj = (difficulty) => {
        return difficulty
    }

    return (
        <div id="gameScreen" className="flex-container column flex-center flyIn">
            <h3>{difficulty}</h3>
            <QuestionDisplay questionObj={getQuestionObj(difficulty)} />
            <button className="buttons titleButtons" onClick={()=>props.leaveAnim("gameScreen", "titleScreen")}>
                <h2 className="buttonText">Back to title</h2>
            </button>
        </div>
    )
}