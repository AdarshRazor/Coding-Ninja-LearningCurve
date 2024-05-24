const amountRReducer = (state=0, action) => {
    if (action.type === 'DEPOSIT_MONEY'){
        return {...state, amount: state.amount + action.payload};
    }
    else if (action.type === 'WITHDRAW_MONEY'){
        return {...state, amount: state.amount - action.payload};
    }
    else{
        return state;
    }
}

export default amountRReducer;