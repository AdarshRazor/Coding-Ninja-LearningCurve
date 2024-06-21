import React, { useEffect, useState } from 'react';

function Effect() {
  // Declare a state variable named 'count' with initial value 0
  const [count, setCount] = useState(0);

  // Function to handle button click
  const handleClick = () => {
    setCount(count + 1); // Increment the count
  };

  const handleClickreset = () => {
    setCount(0); // reset the count
  };

  useEffect(() => {
    alert("Hey welcome here !! useEffect is working")
  }, [])
  // working when component is mounted

  useEffect(() => {
    alert("button clicked !! useEffect is working")
  }, [count])
  // work when button is clicked

  return (
    <div>
      <h1>Effect</h1>
      <p>Button clicked {count} times</p>
      <button type='button' className='btn btn-primary mx-3' onClick={handleClick}>Click me</button>
      <button type='button' className='btn btn-warning mx-3' onClick={handleClickreset}>Reset</button>
    </div>
  );
}

export default Effect;
