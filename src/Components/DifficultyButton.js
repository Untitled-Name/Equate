import React from "react";

export default function DifficultyButton (props){
    const {difficulty, changeScreen, setDifficulty, updateDescription, removeDescription} = props;
    return (
        <button className="buttons descriptionButtons" onClick={()=>{
            changeScreen("difficultyScreen", "gameScreen");
            setDifficulty(difficulty);
            }}
            onMouseOver={()=>{
                updateDescription(difficulty);
            }}
            onMouseOut={()=>{
                removeDescription();
            }}
            >
            <h2 className="buttonText">{difficulty}</h2>
        </button>
    )
}