// React component named Counter

import React, { useState } from 'react';

function ResultDisplay({ getNewResult }) {
  // Initialize the state with an empty string
  const [result, setResult] = useState('');
  // Event handler for the button click
  const handleClick = () => {
    // Call the getNewResult function to get a new result
    const newResult = getNewResult();
    // Set the result state to the new result
    setResult(newResult);
  };
  return (
    <div>
      <button id="button" onClick={handleClick}>
        Click me!
      </button>
      {result && <span id="result">{result}</span>}
    </div>
  );
}
export default ResultDisplay;
