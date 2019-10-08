import React, { useReducer } from 'react';
import { reducer, initialState, actionTypes } from "./reducers/reducer";
import './App.css';
import TodoList from './components/TodoList';
import uuid from "uuid";

function App() {
  const [{listItems, newItemFormValue}, dispatch] = useReducer(reducer, initialState);

  const onValueChange = event => {
    dispatch({
      type: actionTypes.ON_VALUE_CHANGE,
      payload: event.target.value,
    });
  };

  const addNewItem = event => {
    event.preventDefault();
    dispatch({
      type: actionTypes.ADD_NEW_ITEM,
      payload: {
        text: newItemFormValue,
        id: uuid(),
        completed: false,
      }
    });
  };

  const toggleCompleted = event => {
    dispatch({
      type: actionTypes.TOGGLE_COMPLETE,
      payload: { id: event.target.parentElement.id },
    })
  };

  const clearCompleted = () => {
    dispatch({
      type: actionTypes.CLEAR_COMPLETED,
      payload: { listItems: listItems.filter(item => !item.completed) },
    })
  };

  return (
    <div className="App">
      <TodoList 
        listItems={listItems} 
        newItemFormValue={newItemFormValue} 
        onValueChange={onValueChange} 
        addNewItem={addNewItem}
        toggleCompleted={toggleCompleted}
      />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default App;
