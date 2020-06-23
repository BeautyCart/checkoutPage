import React from 'react';

function Options(props) {
  // console.log('props', props)
  const handleClick = (e) => {
    // console.log('should log the value chosen', e.target.value)
    props.handleOptionClick(e.target.value)
  }
  let displayOptions;
  let displayOptionChosen;
  if (props.optionChosenIndex >= 0) {
    // console.log('should display option chosen', props.options[props.optionChosenIndex].amount)
    displayOptionChosen = <p>SIZE: {props.options[props.optionChosenIndex].amount}</p>
  } else {
    displayOptionChosen = <p>Loading...</p>
  }
  if(props.options) {
    displayOptions = props.options.map((option, index) => <button value={index} onClick={handleClick}>{option.label} {option.amount}</button>)
  } else {
    displayOptions = <div>Loading....</div>
  }
  return (
    <div>
      {displayOptionChosen}
      {displayOptions}
    </div>
  )
}

export default Options;