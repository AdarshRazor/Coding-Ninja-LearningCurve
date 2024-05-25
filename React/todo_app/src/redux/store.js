import * as redux from 'redux';
import { todoReducer } from './reducers/todoReducer';

export const store1 = redux.createStore(todoReducer);