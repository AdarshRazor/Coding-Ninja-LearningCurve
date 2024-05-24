import { combineReducers } from 'redux';
import amountRReducer from './amountReducer';

const rootreducers = combineReducers({
    amount: amountRReducer
    // other reducers can be added here
})

export default rootreducers;