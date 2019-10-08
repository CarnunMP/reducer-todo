import uuid from "uuid";

export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: uuid(),
    },
    {
        item: 'Scratch chin',
        completed: false,
        id: uuid(),
    },
    {
        item: 'Hit MVP',
        completed: false,
        id: uuid(),
    }
];

export function reducer(state, action) {
    switch(action.type) {
        default:
            return state;
    }
}