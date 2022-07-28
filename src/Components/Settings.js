import React from "react";

export default function Settings(props){
    return (
        <div>
            <button className="buttons titleButtons" onClick={screen => props.onPress("titleScreen")}>
                <h2 className="buttonText">Back to title</h2>
            </button>
        </div>
    )
}