import React from "react";

export default function DifficultyButton (props){
    const {difficulty} = props;
    return (
        <button className="buttons difficultyButtons" onClick={()=>{
            props.leaveAnim("difficultyScreen", "gameScreen");
            props.setDifficulty(difficulty);
            }}>
            <h2 className="buttonText">{difficulty}</h2>
        </button>
    )
}