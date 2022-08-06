import React from "react";
import Button from "./Button";

export default function ModeScreen (props) {

    const updateDescription = (mode) => {
        let descriptionDiv = document.getElementById("descriptionContainer");
        let description;
        switch (mode){
            case "lives": description = "Try to answer as many questions as possible with 3 lives. Once you're out of lives, it's game over.";break;
            case "timer": description = "Unlimited lives, but each question must be answered within the time limit. Getting a question wrong will lose you time.";break;
            case "endless": description = "Answer as many questions as you want without the stress of lives or a timer.";break;
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
        <div id="modeScreen" className="flex-container column flex-center flyIn">
            <div id="modeButtonsContainer" className="flex-container">
                <Button buttonText={"Lives Mode"} targetScreen={"difficultyScreen"} currentScreen={"modeScreen"} leaveAnim={props.leaveAnim} updateDescription={updateDescription} mode={"lives"} removeDescription={removeDescription} />
                <Button buttonText={"Timed Mode"} targetScreen={"difficultyScreen"} currentScreen={"modeScreen"} leaveAnim={props.leaveAnim} updateDescription={updateDescription} mode={"timer"} removeDescription={removeDescription} />
                <Button buttonText={"Endless Mode"} targetScreen={"difficultyScreen"} currentScreen={"modeScreen"} leaveAnim={props.leaveAnim} updateDescription={updateDescription} mode={"endless"} removeDescription={removeDescription} />
            </div>
            <div id="descriptionContainer" className="flex-container column flex-center modeDescription"></div>
            <Button buttonText={"Back to title"} targetScreen={"titleScreen"} currentScreen={"modeScreen"} leaveAnim={props.leaveAnim}></Button>
        </div>
    )
}