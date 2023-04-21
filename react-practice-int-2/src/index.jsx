import React from 'react';
import ReactDOM from 'react-dom';
import ResultDisplay from './ResultDisplay';

function getNewResult() {
  return 'Hello, world!';
}

ReactDOM.render(<ResultDisplay getNewResult={getNewResult} />, document.getElementById('root'));
