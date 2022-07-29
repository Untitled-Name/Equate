import React from "react";

export default function QuestionDisplay (props) {
    const {questionObj} = props;
    return (
        <div id="questionContainer">
            <h3>{questionObj}</h3>
        </div>
    )
}