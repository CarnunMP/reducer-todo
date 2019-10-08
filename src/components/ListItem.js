import React from "react";

export default function ListItem(props) {
    const {text, id, complete, toggleComplete} = props;

    return (
        <div className="list-item" id={id} >
            <p 
                onClick={toggleComplete}
                style={(complete && {textDecoration: "line-through"}) || null}
            >
                {text}
            </p>
        </div>
    )
}