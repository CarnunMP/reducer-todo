import React from "react";
import ListItem from "./ListItem";
import NewItemForm from "./NewItemForm";

export default function TodoList(props) {
    const {listItems, newItemFormValue, onValueChange, addNewItem, toggleCompleted} = props;
    
    return (
        <div className="todo-list">
            {listItems.map(item => (
                <ListItem text={item.text} id={item.id} completed={item.completed} key={item.id} toggleCompleted={toggleCompleted} />
            ))}
            <NewItemForm value={newItemFormValue} onValueChange={onValueChange} addNewItem={addNewItem} />
        </div>
    )
}