import React from 'react';
import ReactDOM from 'react-dom';

function Options({options, optionChosen, handleOptionClick}) {
  // const handleClick = (e) => {
  //   handleOptionClick(e.target.value.option, e.target.value.index)
  // }
  // onClick={handleClick}
  let displayOptions;
  if(options) {
    displayOptions = options.map((option, index) => <button value={{option:option, index:index}} >{option.label} {option.amount}</button>)
  } else {
    displayOptions = <div>Loading...</div>
  }
  return (
    <div>
      <div>{optionChosen}</div>
      {displayOptions}
    </div>
  )
}

export default Options;