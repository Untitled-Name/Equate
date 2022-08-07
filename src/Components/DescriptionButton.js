import React from "react";

export default function DescriptionButton (props){
    const {buttonText, targetScreen, currentScreen} = props;
    return (
        <button className="buttons descriptionButtons" 
            onClick={() => {
                props.changeScreen(currentScreen, targetScreen);
                props.setCurrentMode(props.mode)
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