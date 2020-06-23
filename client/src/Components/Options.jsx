import React from 'react';
import ReactDOM from 'react-dom';

function Options({options}) {
  console.log(options)
  let displayOptions;
  if(options) {
    displayOptions = options.map((option) => <button>{option.label} {option.amount}</button>)
  } else {
    displayOptions = <div>Loading...</div>
  }
  return (
    <div>
      <div>Option Chosen</div>
      {displayOptions}
    </div>
  )
}

export default Options;