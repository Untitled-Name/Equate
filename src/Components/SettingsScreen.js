import React from "react";
import Button from "./Button";

export default function SettingsScreen(props){
    
    let backgroundState = false;
    const setBackground = () => {
        if (backgroundState){
            document.body.style.backgroundImage = "none";
            document.getElementById("settingsScreen").style.background = "linear-gradient(180deg, rgba(0,0,0,0) 33%, rgba(0,129,191,1) 66%)";
            backgroundState = false;
        } else {
            document.body.style.backgroundImage = `url(${props.background})`;
            document.getElementById("settingsScreen").style.background = "none";
            backgroundState = true;
        }
    }
    
    return (
        <div id="settingsScreen" className="flex-container column flex-center flyIn">
            <button className="buttons buttonText settingsButtons" onClick={()=>{setBackground()}}>Change Background</button>
            <Button buttonText={"Back to title"} targetScreen={"titleScreen"} currentScreen={"settingsScreen"} leaveAnim={props.leaveAnim}></Button>
        </div>
    )
}