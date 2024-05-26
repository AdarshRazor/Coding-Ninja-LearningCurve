import * as redux from 'redux';
import { todoReducer } from './reducers/todoReducer';

export const store1 = redux.createStore(todoReducer);



// If you want to combine the reducers
// const result = combineReducers({
//     todos: todoReducer,
//     users: userReducer,
// })
// export const store2 = redux.createStore(result);