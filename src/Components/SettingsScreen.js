import React from "react";

export default function SettingsScreen(props){
    return (
        <div id="settingsScreen" className="flex-container column flex-center flyIn">
            <button className="buttons titleButtons" onClick={()=>props.leaveAnim("settingsScreen", "titleScreen")}>
                <h2 className="buttonText">Back to title</h2>
            </button>
        </div>
    )
}