import React from "react";

export default function Button (props){
    const {buttonText, targetScreen, currentScreen} = props;
    return (
        <button className="buttons titleButtons" 
            onClick={() => {
                props.leaveAnim(currentScreen, targetScreen);
            }} 
            onMouseOver={()=>{
                if (currentScreen === "modeScreen"){
                    props.updateDescription(props.mode);
                }
            }}
            onMouseOut={()=>{
                if (currentScreen === "modeScreen"){
                    props.removeDescription();
                }
            }}>
            <h2 className="buttonText">{buttonText}</h2>
        </button>
    )
}