import React from "react";

export default function ListItem(props) {
    const {text, id, completed, toggleCompleted} = props;

    return (
        <div className="list-item" id={id} >
            <p 
                onClick={toggleCompleted}
                style={(completed && {textDecoration: "line-through"}) || null}
            >
                {text}
            </p>
        </div>
    )
}