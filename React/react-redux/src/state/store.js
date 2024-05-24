// dunno what is happening here

import { applyMiddleware, configureStore } from "redux";
import thunk from 'redux-thunk'; // help to execute async functions
import reducers from "./reducers";


// take reducers, initial state, if u have middpleware and thats make a store
export const store = configureStore(reducers, {}, applyMiddleware(thunk))