import React from 'react';
import ReactDOM from 'react-dom';

function Options(props) {
  console.log('PROPS', props)
  let displayOptions;
  let displayOptionChosen;
  if (props.optionChosen) {
    console.log("LABEL", props.optionChosen.description.label, "AMOUNT", props.optionChosen.description.amount)
    displayOptionChosen = <p>SIZE: {props.optionChosen.description.amount}</p>
  } else {
    displayOptionChosen = <p>Loading...</p>
  }
  if(props.options) {
    displayOptions = props.options.map((option) => <button>{option.label} {option.amount}</button>)
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