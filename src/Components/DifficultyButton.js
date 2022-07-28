import React from "react";

export default function DifficultyButton (props){
    const {difficulty} = props;
    return (
        <button className="buttons difficultyButtons">
            <h2 className="buttonText">{difficulty}</h2>
        </button>
    )
}