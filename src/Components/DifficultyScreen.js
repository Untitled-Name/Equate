import React from "react";
import DifficultyButton from "./DifficultyButton";

export default function DifficultyScreen (props){
    return (
        <div id="difficultyScreen" className="flex-container column flex-center flyIn">
            <div className="difficultyContainer flex-container column flex-center">
                <DifficultyButton difficulty={"Easy"}/>
                <DifficultyButton difficulty={"Normal"}/>
                <DifficultyButton difficulty={"Hard"}/>
                <button className="buttons titleButtons" onClick={() => {
            props.leaveAnim("difficultyScreen", "titleScreen");
            }}>
                    <h2 className="buttonText">Back to title</h2>
                </button>
            </div>
        </div>
    )
}