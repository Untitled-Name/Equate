import React from "react";
import Button from "./Button";

export default function ModeScreen (props) {
    return (
        <div id="modeScreen" className="flex-container column flex-center flyIn">
            <div id="modeButtonsContainer" className="flex-container">
                <Button buttonText={"Lives Mode"} targetScreen={"difficultyScreen"} currentScreen={"modeScreen"} leaveAnim={props.leaveAnim} />
                <Button buttonText={"Timed Mode"} targetScreen={"difficultyScreen"} currentScreen={"modeScreen"} leaveAnim={props.leaveAnim} />
                <Button buttonText={"Endless Mode"} targetScreen={"difficultyScreen"} currentScreen={"modeScreen"} leaveAnim={props.leaveAnim} />
            </div>
            <div id="descriptionContainer" className="flex-container column flex-center">
                <p>Sample text sample text sample text sample text sample text sample text.</p>
            </div>
            <Button buttonText={"Back to title"} targetScreen={"titleScreen"} currentScreen={"modeScreen"} leaveAnim={props.leaveAnim}></Button>
        </div>
    )
}