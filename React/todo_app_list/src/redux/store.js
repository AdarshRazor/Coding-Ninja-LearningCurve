import todoReducer from "./todoReducer";
import * as redux from 'redux'

const store1 = redux.createStore(todoReducer)

export default store1;