import React from "react";
import { useState } from "react";
import Button from "./Button";
import GameContainer from "./GameContainer";

export default function GameScreen (props) {
    const [heartCount, setHeartCount] = useState(props.livesCount);
    const [score, setScore] = useState(0);

    const startGame = () => {
        if (props.currentMode === "lives"){
            let livesInnerHTML = "";
            for (let i = 1; i <= heartCount; i++){
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

    const gameOver = () => {
        let gameOverScreen = document.getElementById("gameOverContainer")
        document.getElementById("gameContainerContainer").classList.add("outToLeft");
        setTimeout(()=>{
            document.getElementById("gameContainerContainer").classList.add("hide");
            gameOverScreen.style.display = "flex";
            gameOverScreen.classList.add("inFromRight");
        }, 600);
    }

    const checkAns = (answer, correctAns) => {
        if (answer === correctAns){
            setTimeout(()=>{setScore(score + 1)}, 600);
        } else {
            removeHeart();
        }
    }

    const removeHeart = () => {
        if (heartCount - 1 <= 0){
            gameOver();
        }
        document.getElementById(`livesSpan${heartCount}`).innerHTML = "<img src=" + props.heart_empty + " />";
        setHeartCount(heartCount - 1);
    }

    return (
        <div id="gameScreen" className="flex-container column flex-center flyIn">
            <div id="startContainer" className="grid-container flex-center">
                <p>{props.currentMode}</p>
                <button className="buttons titleButtons buttonText" onClick={()=>{startGame()}}>Click Here to Begin</button>
                <Button buttonText={"Go Back"} targetScreen={"difficultyScreen"} currentScreen={"gameScreen"} changeScreen={props.changeScreen}/>
            </div>
            <div id="gameOverContainer" className="flex-container column flex-center hide">
                <h3>Game Over!</h3>
                <h4>Your score was {score}</h4>
                <Button buttonText={"Back To Title"} targetScreen={"titleScreen"} currentScreen={"gameScreen"} changeScreen={props.changeScreen}/>
            </div>
            <div id="gameContainerContainer">
                <GameContainer changeScreen={(currentScreen, targetScreen) => props.changeScreen(currentScreen, targetScreen)} 
                    difficulty={props.difficulty} currentMode={props.currentMode} score={score} checkAns={checkAns} />
            </div>
        </div>
    )
}