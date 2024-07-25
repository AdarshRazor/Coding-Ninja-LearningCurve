export const depositMoney = (amount) => {
    return {
      type: 'DEPOSIT_MONEY',
      payload: amount
    };
  };
  
  export const withdrawMoney = (amount) => {
    return {
      type: 'WITHDRAW_MONEY',
      payload: amount
    };
  };
  

// export const despositMoney = (amount) => {
//     return (dispatch)=>{
//         dispatch({type: 'DEPOSIT_MONEY',
//         payload: amount})
//     }
// }

// export const withdrawMoney = (amount) => {
//     return (dispatch)=>{
//         dispatch({type: 'WITHDRAW_MONEY',
//         payload: amount})
//     }
// }