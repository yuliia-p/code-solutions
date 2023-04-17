/*
A twin of a word is a word written with the same letters (case insensitive but not necessarily in the same order.
For example silent is a twin of Listen
The isTwin(a, b) function should return true if b is the twin of al and [false otherwise. a and b are two non-null strings.
Write the body of the isTwin(a, b) function.
*/

function isTwin(a, b) {
  // Convert both strings to lowercase and split them into arrays of characters
  var arrA = a.toLowerCase().split('');
  var arrB = b.toLowerCase().split('');

  // Check if the lengths are the same
  if (arrA.length !== arrB.length) {
    return false;
  }
  // Sort the arrays of characters and compare them
  arrA.sort();
  arrB.sort();
  for (var i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }
  return true;
}
console.log(isTwin('silent', 'Listen')); // true
console.log(isTwin('abcdef', 'acbdef')); // true
console.log(isTwin('abc', 'abcd')); // false
console.log(isTwin('hello', 'world')); // false

/*
React component named Counter

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
      <p id="value">{value}</p>
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

The Counter component uses the useState hook to initialize the state with a value of 0
and a function to update the state (setValue). It also defines two event handlers
(handleIncrement and handleDecrement) that call setValue to update the state.

In the JSX code, the value state is displayed in a paragraph element with an id of "value".
Two buttons with ids of "increment" and "decrement" are also rendered, and their onClick props
are set to the corresponding event handlers.

To use the Counter component in another component or in the index.js file, you can import
it and render it like any other component:

import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

ReactDOM.render(<Counter />, document.getElementById('root'));

*/

/*
ResultDisplay

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

The ResultDisplay component takes a getNewResult function as a prop and defines an event handler
handleClick that calls this function to get a new result. The new result is then stored in the
result state using the setResult function.

In the JSX code, a button with an id of "button" is rendered, and its onClick prop is set to
the handleClick event handler. The result state is checked using a conditional rendering with
the && operator, and if it's not an empty string, a span element with an id of "result" is rendered
to display the result.

To use the ResultDisplay component in another component or in the index.js file, you can import it
and pass a getNewResult function as a prop:

import React from 'react';
import ReactDOM from 'react-dom';
import ResultDisplay from './ResultDisplay';

function getNewResult() {
  return 'Hello, world!';
}

ReactDOM.render(<ResultDisplay getNewResult={getNewResult} />, document.getElementById('root'));
*/
