// Bal.js
import React from 'react';
import './Bal.css';
import { useSelector } from 'react-redux';

function Bal() {
  const amount = useSelector(state => state); // If the state has only `amount`

  return (
    <div className='container bal my-3'>
      <h1>D-Web Bank</h1>
      <button disabled className='btn btn-primary'>Your Balance: {amount} BTC</button>
    </div>
  );
}

export default Bal;
