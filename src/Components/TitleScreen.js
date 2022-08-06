import React from "react";
import Button from "./Button";

export default function TitleScreen(props){
    const removeAnim = () => {
        document.getElementById("titleTextContainer").classList.remove("titleContainerAnim");
        document.getElementById("buttons-container").classList.remove("buttonsAnim");
        document.getElementById("buttonDisabler").classList.add("disableElem");
    }
    

    setTimeout(() => {
        document.getElementById("buttonDisabler").classList.add("disableElem");
    }, 400);
    clearTimeout();

    return (
        <div id="titleScreen" className="flex-container column flex-center flyInRev" onClick={() => removeAnim()}>
            <div className="titleContainer grid-container column flex-center">
                <div id="buttonDisabler" className="disableButtons"></div>
                <div id="titleTextContainer" className=""><h1>Equate</h1></div>
                <div id="buttons-container" className="buttonsContainer flex-container column flex-center">
                    <Button buttonText={"Play"} targetScreen={"modeScreen"} currentScreen={"titleScreen"} leaveAnim={props.leaveAnim}></Button>
                    <Button buttonText={"Settings"} targetScreen={"settingsScreen"} currentScreen={"titleScreen"} leaveAnim={props.leaveAnim} setDifficulty={props.setDifficulty}></Button>
                    <Button buttonText={"About"}></Button>
                </div>
            </div>
        </div>
    )
}