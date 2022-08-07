import React from "react";
import DifficultyButton from "./DifficultyButton";
import Button from "./Button";
import DescriptionButton from "./DescriptionButton";

export default function DifficultyScreen (props){

    const updateDescription = (difficulty) => {
        let descriptionDiv = document.getElementById("descriptionContainer");
        let description;
        switch (difficulty){
            case "Easy": description = "Mostly basic algebra questions.";break;
            case "Normal": description = "A mix of algebra questions and quadratic questions, with the occassional calculus question.";break;
            case "Hard": description = "Mostly calculus questions with larger numbers.";break;
            default: alert("I don't know how, but you've broken it");
        }
        let textDiv = document.createElement("p");
        textDiv.setAttribute("id", "modeDescriptionText")
        textDiv.innerText = description;
        descriptionDiv.appendChild(textDiv);
    }

    const removeDescription = () => {
        document.getElementById("modeDescriptionText").remove();
    }

    return (
        <div id="difficultyScreen" className="flex-container column flex-center flyIn">
            <div className="flex-container descriptionMenu">
                <DifficultyButton difficulty={"Easy"} changeScreen={props.changeScreen} setDifficulty={props.setDifficulty} updateDescription={updateDescription} removeDescription={removeDescription}/>
                <DifficultyButton difficulty={"Normal"} changeScreen={props.changeScreen} setDifficulty={props.setDifficulty} updateDescription={updateDescription} removeDescription={removeDescription}/>
                <DifficultyButton difficulty={"Hard"} changeScreen={props.changeScreen} setDifficulty={props.setDifficulty} updateDescription={updateDescription} removeDescription={removeDescription}/>
            </div>
            <div id="descriptionContainer" className="flex-container column flex-center modeDescription"></div>
            <Button buttonText={"Back to title"} targetScreen={"titleScreen"} currentScreen={"difficultyScreen"} changeScreen={props.changeScreen}></Button>
        </div>
    )
}