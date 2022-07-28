import React from "react";

export default function Button (props){
    const {buttonText, targetScreen} = props;
    return (
        <button className="buttons titleButtons" onClick={screen => props.onPress(targetScreen)}>
            <h2 className="buttonText">{buttonText}</h2>
        </button>
    )
}