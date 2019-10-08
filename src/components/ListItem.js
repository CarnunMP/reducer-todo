import React from "react";

export default function ListItem(props) {
    const {text, id} = props;

    return (
        <div className="list-item" id={id}>
            <p>{text}</p>
        </div>
    )
}