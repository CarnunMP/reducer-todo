import React from "react";
import ListItem from "./ListItem";
import NewItemForm from "./NewItemForm";

export default function TodoList(props) {
    const {listItems, newItemFormValue, onValueChange, addNewItem} = props;
    
    return (
        <div className="todo-list">
            {listItems.map(item => (
                <ListItem text={item.text} id={item.id} key={item.id} />
            ))}
            <NewItemForm value={newItemFormValue} onValueChange={onValueChange} addNewItem={addNewItem} />
        </div>
    )
}