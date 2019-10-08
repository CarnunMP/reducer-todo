import React from "react";
import ListItem from "./ListItem";
import NewItemForm from "./NewItemForm";

export default function TodoList(props) {
    const {listItems, newItemFormValue, onValueChange, addNewItem, toggleComplete} = props;
    
    return (
        <div className="todo-list">
            {listItems.map(item => (
                <ListItem text={item.text} id={item.id} complete={item.complete} key={item.id} toggleComplete={toggleComplete} />
            ))}
            <NewItemForm value={newItemFormValue} onValueChange={onValueChange} addNewItem={addNewItem} />
        </div>
    )
}