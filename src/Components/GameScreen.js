import React from "react";
import { useState } from "react";
import Button from "./Button";
import GameContainer from "./GameContainer";

export default function GameScreen (props) {
    const [heartCount, setHeartCount] = useState(props.livesCount);

    const startGame = () => {
        if (props.currentMode === "lives"){
            let livesInnerHTML = "";
            for (let i = 0; i < heartCount; i++){
                livesInnerHTML += "<span id='livesSpan" + i + "'><img src=" + props.heart_full + " /></span>"
            }
            document.getElementById("livesAndTimerContainer").innerHTML = livesInnerHTML;
        } else if (props.currentMode === "timer"){
            document.getElementById("livesAndTimerContainer").innerHTML = "<span className='livesSpan'><img src=" + props.timer + " />30</span>"
        }
        document.getElementById("startContainer").classList.add("outToLeft")
        setTimeout(()=>{
            document.getElementById("gameAndInfoContainer").style.display = "block";
            document.getElementById("startContainer").remove()
        }, 600);
    }

    const removeHeart = () => {
        console.log(`livesSpan${heartCount - 1}`);
        document.getElementById(`livesSpan${heartCount - 1}`).innerHTML = "<img src=" + props.heart_empty + " />";
        setHeartCount(heartCount  - 1);
    }

    return (
        <div id="gameScreen" className="flex-container column flex-center flyIn">
            <div id="startContainer" className="grid-container flex-center">
                <p>{props.currentMode}</p>
                <button className="buttons titleButtons buttonText" onClick={()=>{startGame()}}>Click Here to Begin</button>
                <Button buttonText={"Go Back"} targetScreen={"difficultyScreen"} currentScreen={"gameScreen"} changeScreen={props.changeScreen}/>
            </div>
            <GameContainer changeScreen={(currentScreen, targetScreen) => props.changeScreen(currentScreen, targetScreen)} difficulty={props.difficulty} currentMode={props.currentMode} removeHeart={removeHeart} />
        </div>
    )
}