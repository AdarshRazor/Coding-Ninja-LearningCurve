//actions

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

//action creators
// export const addtodo = (text) => ({text, type:ADD_TODO})
export const addtodo = (text) => (
    {
        type: ADD_TODO,
        payload: text
    }
);

export const toggletodo = (index) => (
    {
        type: TOGGLE_TODO,
        index
    }
);

export const removetodo = (index) => (
    {
        type: REMOVE_TODO,
        index
    }
);