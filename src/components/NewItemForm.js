import React from "react";

export default function NewItemForm(props) {
    const {value, onValueChange, addNewItem} = props;

    return (
        <form className="new-item-form" onSubmit={addNewItem} >
            <input value={value} onChange={onValueChange} />
            <input type="submit" />
        </form>
    )
}