import React from "react";

export default function Button (props){
    const {buttonText} = props;
    return (
        <div className="buttons">
            <h2 className="buttonText">{buttonText}</h2>
        </div>
    )
}