import React from 'react'
import './Bal.css'

function But() {
  return (
    <>
    <div className='container'>
    <h3 className='mx-3'>Amount</h3>
    <div className='but'>
        <button className='btn btn-success mx-4'>+</button>
        <p style={{color: 'orange', fontWeight: '600', marginTop: '1%'}}>10 BTC</p>
        <button className='btn btn-success mx-4'>-</button>
    </div>
    </div>
    </>
  )
}

export default But