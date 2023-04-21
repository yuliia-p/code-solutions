// React component named Counter

import React, { useState } from 'react';

const styles = {
  container: {
    textAlign: 'center',
    width: '700px',
    margin: '4rem auto'
  },
  button: {
    padding: '10px 15px',
    borderRadius: '20px',
    border: '1px solid grey',
    backgroundColor: 'white'
  }
};

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
    <div className='container' style={styles.container}>
      <h1 id="value">{value}</h1>
      <button style={styles.button} id="increment" onClick={handleIncrement}>
        Increment
      </button>
      <button style={styles.button} id="decrement" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}
export default Counter;
