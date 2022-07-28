import React from "react";
import Button from "./Button";

export default function TitleScreen(props){
    const removeAnim = () => {
        document.getElementById("title-container").classList.remove("titleContainerAnim");
        document.getElementById("buttons-container").classList.remove("buttonsAnim");
        document.getElementById("buttonDisabler").classList.add("disableElem");
    }

    setTimeout(() => {
        document.getElementById("buttonDisabler").classList.add("disableElem");
    }, 600);
    clearTimeout();

    return (
        <div id="titleScreen" className="grid-container column flex-center titleFlex flyIn" onClick={() => removeAnim()}>
            <div id="buttonDisabler" className="disableButtons"></div>
            <div id="title-container" className=""><h1>Equate</h1></div>
            <div id="buttons-container" className="buttonsContainer flex-container column flex-center">
                <Button buttonText={"Play"} targetScreen={"difficultyScreen"} currentScreen={"titleScreen"} leaveAnim={props.leaveAnim}></Button>
                <Button buttonText={"Settings"} targetScreen={"settingsScreen"} currentScreen={"titleScreen"} leaveAnim={props.leaveAnim}></Button>
                <Button buttonText={"Third Button"}></Button>
            </div>
        </div>
    )
}