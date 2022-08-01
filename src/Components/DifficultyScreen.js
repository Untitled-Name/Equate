import React from "react";
import DifficultyButton from "./DifficultyButton";
import Button from "./Button";

export default function DifficultyScreen (props){
    return (
        <div id="difficultyScreen" className="flex-container column flex-center flyIn">
            <div className="difficultyContainer flex-container column flex-center">
                <DifficultyButton difficulty={"easy"} leaveAnim={props.leaveAnim} setDifficulty={props.setDifficulty}/>
                <DifficultyButton difficulty={"normal"} leaveAnim={props.leaveAnim} setDifficulty={props.setDifficulty}/>
                <DifficultyButton difficulty={"hard"} leaveAnim={props.leaveAnim} setDifficulty={props.setDifficulty}/>
                <Button buttonText={"Back to title"} targetScreen={"titleScreen"} currentScreen={"difficultyScreen"} leaveAnim={props.leaveAnim}></Button>
            </div>
        </div>
    )
}