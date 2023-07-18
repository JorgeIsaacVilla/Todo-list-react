import React from "react";
import "./TodoItem.css";

function CompleteICon(props) {
    return (
        <>
        <span 
        className= {`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onComplete}
        >✔
        </span>
        </>
    );
}

export { CompleteICon };