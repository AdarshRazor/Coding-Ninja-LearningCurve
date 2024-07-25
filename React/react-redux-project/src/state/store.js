// store.js
import { createStore } from 'redux';
import amountReducer from './reducers/amountRed';

const store1 = createStore(amountReducer);

export default store1;
