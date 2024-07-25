import React from 'react'
import './Bal.css'
import { useDispatch } from 'react-redux';
import { depositMoney, withdrawMoney } from '../state/action-creators/index'; // Adjust the import path as needed

function But() {
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <h3 className='mx-3'>Amount</h3>
      <div className='but'>
        <button className='btn btn-success mx-4' onClick={() => dispatch(withdrawMoney(10))}>-</button>
        <p style={{ color: 'orange', fontWeight: '600', marginTop: '1%' }}>10 BTC</p>
        <button className='btn btn-success mx-4' onClick={() => dispatch(depositMoney(10))}>+</button>
      </div>
    </div>
  );
}

export default But;
