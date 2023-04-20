// React component named Counter

import React, { useState } from 'react';

function Counter() {
  // Initialize the state with a value of 0
  const [value, setValue] = useState(0);
  // Event handler for incrementing the value
  const handleIncrement = () => {
    setValue(value + 1);
  };
  // Event handler for decrementing the value
  const handleDecrement = () => {
    setValue(value - 1);
  };
  return (
    <div>
      <h1 id="value">{value}</h1>
      <button id="increment" onClick={handleIncrement}>
        Increment
      </button>
      <button id="decrement" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}
export default Counter;
