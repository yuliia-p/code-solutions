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

/*
The FilterDuplicates function takes an array data as input and returns
an array containing the values of data without the duplicates.
It does this by creating a new Set object to keep track of the values
that have already been seen, and an empty result array to store the unique values.

Then, it iterates through each item in the data array using a for...of loop,
and checks if the seen set already contains the item. If it does not, the
item is added to the seen set using the add method, and also pushed onto
the result array using the push method.

Finally, the result array is returned, which contains only the unique values of the
data array in their original order.

You can use this function like this:
*/

function FilterDuplicates(data) {
  const seen = new Set();
  const result = [];

  for (const item of data) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }

  return result;
}

const data = [7, 6, 4, 3, 3, 4, 9];
const filteredData = FilterDuplicates(data);
console.log(filteredData); // [7, 6, 4, 3, 9]

/*

The computeClosestrozero function takes an array of temperatures ts as input and
returns the temperature closest to 0. If the array is empty, the function returns 0.
If two temperatures are equally close to zero, the positive temperature is returned.
*/

function computeClosestrozero(ts) {
  // check if the ts array is empty
  if (ts.length === 0) {
    return 0;
  }
  // initializ a variable closest to the first temperature in the array
  let closest = ts[0];

  // compare each temperature to the current closest temperature
  for (let i = 1; i < ts.length; i++) {
    const current = ts[i];
    // for each temperature, it calculates its absolute value using the Math.abs function,
    // and checks if it is closer to 0 than the current closest temperature.

    if (Math.abs(current) < Math.abs(closest) || (Math.abs(current) === Math.abs(closest) && current > closest)) {

      // If it is, it replaces the closest variable with the current temperature.
      closest = current;
    }
  }

  return closest;
}
const temperatures = [-5, 2, 3, -1, 5, -4];
const closestTemperature = computeClosestrozero(temperatures);
console.log(closestTemperature); // -1
