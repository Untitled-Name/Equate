import React from "react";

export default function Button (props){
    const {buttonText, targetScreen, currentScreen} = props;
    return (
        <button className="buttons titleButtons" 
            onClick={() => {
                props.changeScreen(currentScreen, targetScreen);
            }}>
            <h2 className="buttonText">{buttonText}</h2>
        </button>
    )
}