import React from "react";
import Button from "./Button";

export default function TitleScreen(props){
    const removeAnim = () => {
        document.getElementById("title-container").classList.remove("titleContainerAnim");
        document.getElementById("buttons-container").classList.remove("buttonsAnim");
    }

    return (
        <div className="grid-container column flex-center titleFlex" onClick={() => removeAnim()}>
            <div id="title-container" className="titleContainerAnim"><h1>Equate</h1></div>
            <div id="buttons-container" className="buttonsContainer flex-container column flex-center buttonsAnim">
                <Button buttonText={"Play"} targetScreen={"difficultySelect"} onPress={props.onPress}></Button>
                <Button buttonText={"Settings"} targetScreen={"settings"} onPress={props.onPress}></Button>
                <Button buttonText={"Third Button"}></Button>
            </div>
        </div>
    )
}