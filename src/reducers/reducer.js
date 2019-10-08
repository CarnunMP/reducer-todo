import uuid from "uuid";

export const initialState = {
    listItems: [
        {
            text: 'Learn about reducers',
            completed: false,
            id: uuid(),
        },
        {
            text: 'Scratch chin',
            completed: false,
            id: uuid(),
        },
        {
            text: 'Hit MVP',
            completed: false,
            id: uuid(),
        }
    ],
    newItemFormValue: "",
}

export const actionTypes = {
    ON_VALUE_CHANGE: "ON_VALUE_CHANGE",
    ADD_NEW_ITEM: "A_NEW_ITEM",
    TOGGLE_COMPLETE: "TOGGLE_COMPLETE",
}

export function reducer(state, action) {
    switch(action.type) {
        case actionTypes.ON_VALUE_CHANGE:
            return {
                ...state,
                newItemFormValue: action.payload,
            }
        case actionTypes.ADD_NEW_ITEM:
            return {
                listItems: [...state.listItems, action.payload],
                newItemFormValue: "",
            }
        case actionTypes.TOGGLE_COMPLETE:
            let newItemsState = state.listItems;
            const itemToToggleIndex = newItemsState.findIndex(item => item.id === action.payload.id);
            newItemsState[itemToToggleIndex].complete = !newItemsState[itemToToggleIndex].complete;
            
            return {
                listItems: newItemsState,
                newItemFormValue: state.newItemFormValue,
            }
        default:
            return state;
    }
}