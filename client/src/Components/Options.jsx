import React from 'react';

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { handleOptionClick } = this.props;
    handleOptionClick(e.target.value);
  }

  displayOptionChosen() {
    const { optionChosenIndex, options } = this.props;
    if (optionChosenIndex >= 0) {
      return (
        <p>
          SIZE:
          {options[optionChosenIndex].amount}
        </p>
      );
    }
    return <p>Loading...</p>;
  }

  displayOptions() {
    const { options, item: { _id } } = this.props;
    if (options) {
      return options.map((option, index) => (
        <button type="button" value={index} key={_id + option.label} onClick={this.handleClick}>
          {option.label}
          {' '}
          {option.amount}
        </button>
      ));
    }
    return <div>Loading....</div>;
  }

  render() {
    return (
      <div>
        {this.displayOptionChosen()}
        {this.displayOptions()}
      </div>
    );
  }
}

export default Options;
