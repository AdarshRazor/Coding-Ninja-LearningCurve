import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "./todoAction";

const initialState = {
    todos: [
        {
            text: 'Learn React',
            completed: true
        },
        {
            text: 'Practice coding',
            completed: false
        }
    ]
};

const todoReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, { text: action.payload, completed: false }]};

        case TOGGLE_TODO:
            return {...state, 
                todos: state.todos.map((todo, index)=>{
                if (index === action.index){
                    return {...todo,completed: !todo.completed};
                }
                return todo;
            })}

        case REMOVE_TODO:
            return {...state, todos: state.todos.filter((_, index)=> index!==action.index)}
        default:
            return state;
    }
}

export default todoReducer;