import React from "react";
import DifficultyButton from "./DifficultyButton";

export default function DifficultySelect (props){
    return (
        <div id="difficultyScreen" className="flex-container column flex-center">
            <DifficultyButton difficulty={"Easy"}/>
            <DifficultyButton difficulty={"Normal"}/>
            <DifficultyButton difficulty={"Hard"}/>
            <button className="buttons titleButtons" onClick={screen => props.onPress("titleScreen")}>
                <h2 className="buttonText">Back to title</h2>
            </button>
        </div>
    )
}