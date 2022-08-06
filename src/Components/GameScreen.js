import React from "react";
import Button from "./Button";
import GameContainer from "./GameContainer";

export default function GameScreen (props) {

    const startGame = () => {
        document.getElementById("startContainer").classList.add("outToLeft")
        setTimeout(()=>{document.getElementById("gameContainer").style.display = "flex";
        document.getElementById("startContainer").remove()}, 600);
    }

    return (
        <div id="gameScreen" className="flex-container column flex-center flyIn">
            <div id="startContainer" className="grid-container flex-center">
                <button className="buttons titleButtons buttonText" onClick={()=>{startGame()}}>Click Here to Begin</button>
                <Button buttonText={"Go Back"} targetScreen={"difficultyScreen"} currentScreen={"gameScreen"} leaveAnim={props.leaveAnim}/>
            </div>
            <GameContainer leaveAnim={(currentScreen, targetScreen) => props.leaveAnim(currentScreen, targetScreen)} difficulty={props.difficulty} />
        </div>
    )
}