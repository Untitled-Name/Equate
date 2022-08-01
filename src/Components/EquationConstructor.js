import React from "react";

export default function EquationConstructor (props) {
    return <div dangerouslySetInnerHTML={{__html: props.equation}}></div>
}