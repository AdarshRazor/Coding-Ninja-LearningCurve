// arrow function takes a argument and returns a function which takes the function as a arguements. (ye kya ho gaya :D)

export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'DEPOSIT_MONEY',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'WITHDRAW_MONEY',
            payload: amount
        })
    }
}