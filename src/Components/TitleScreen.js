import React from "react";
import Button from "./Button";

export default function TitleScreen(props){
    return (
        <div className="grid-container column flex-center titleFlex">
            <div id="title-container"><h1>Equate</h1></div>
            <div className="buttonsContainer flex-container column flex-center">
                <Button buttonText={"Play"}></Button>
                <Button buttonText={"Settings"}></Button>
                <Button buttonText={"Third Button"}></Button>
            </div>
        </div>
    )
}