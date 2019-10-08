import React, { useReducer } from "react";
import { reducer, initialState } from "../reducers/reducer";
import ListItem from "./ListItem";

export default function TodoList() {
    const [listItems, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="todo-list">
            {listItems.map(item => (
                <ListItem text={item.item} id={item.id} key={item.id} />
            ))}
        </div>
    )
}