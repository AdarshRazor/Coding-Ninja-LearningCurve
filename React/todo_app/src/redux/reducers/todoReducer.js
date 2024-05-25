// reducers are pure functions and it doesnt depend on any external data
import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions";

const initialState = {
    todos: [
        {
            text: 'Learn React',
            completed: true
        },
        { 
            text: 'Learn Redux',
            completed: false
        }
    ]
}

// state and action as input
// return object : everything which we have in state, and the new todos
export function todoReducer(state=initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                // below updates the todo property of the state
                todos: [
                    // used again to include all existing to-do items
                    ...state.todos, 
                    // we added existing todo and added new todo
                   {
                    text: action.text,
                    completed: false
                   } 
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) => {
                    if (index === action.index){
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}
