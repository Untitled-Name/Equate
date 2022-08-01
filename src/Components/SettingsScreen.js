import React from "react";
import Button from "./Button";

export default function SettingsScreen(props){
    
    document.body.style.backgroundImage = `url(${props.background})`;
    return (
        <div id="settingsScreen" className="flex-container column flex-center flyIn">
            <Button buttonText={"Back to title"} targetScreen={"titleScreen"} currentScreen={"settingsScreen"} leaveAnim={props.leaveAnim}></Button>
        </div>
    )
}