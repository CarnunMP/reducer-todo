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
    CLEAR_COMPLETED: "CLEAR_COMPLETED",
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
            newItemsState[itemToToggleIndex].completed = !newItemsState[itemToToggleIndex].completed;
            // Q: Would it be better for this logic to live in App.js?

            return {
                listItems: newItemsState,
                newItemFormValue: state.newItemFormValue,
            }
        case actionTypes.CLEAR_COMPLETED:
            return {
                listItems: action.payload.listItems,
                newItemFormValue: state.newItemFormValue,
            }
        default:
            return state;
    }
}