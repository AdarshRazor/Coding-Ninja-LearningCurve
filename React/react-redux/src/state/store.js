// dunno what is happening here
import { configureStore } from '@reduxjs/toolkit';
//import {thunk} from 'redux-thunk'; // help to execute async functions
import rootreducers from "./reducers";


// take reducers, initial state, if u have middpleware and thats make a store
// export const store = configureStore(reducers, {}, applyMiddleware(thunk))

// export const store = configureStore({
//     reducer: rootreducers,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
//   });

const store = configureStore({
    reducer: rootreducers,
  });

export default store;