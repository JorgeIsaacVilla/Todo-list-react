import React from "react";
import "./TodoItem.css";

function DeleteIcon(props){
return (
    <>
        <span 
            className="Icon Icon-delete"
            onClick={props.onDelete}
            > ✖
        </span>
    </>
);
}

export { DeleteIcon}