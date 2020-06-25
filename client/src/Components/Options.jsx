import React from 'react';
import styled from 'styled-components';

const OptionChosenDiv = styled.div`
  width: 612px;
  height: 35px;
`;

const OptionsDiv = styled.div`
  width: 612px;
  height: 138px;
`;

const OptionDiv = styled.div`
  width: 612px;
`;

const OptionLabelDiv = styled.div`
  margin-top: ${(props) => (props.value > 0 ? '12px' : '0px')};
  margin-bottom: 4px;
`;

const ButtonDiv = styled.div`

`;

const Button = styled.button`
  border-color: #ccc;
  border-style: solid;
  padding: 8px 12px;
  background-color: transparent;
  border-radius: 4px;
  border-width: 1px;
`;

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
        <OptionDiv>
          <OptionLabelDiv value={index}>{option.label}</OptionLabelDiv>
          <Button type="button" value={index} key={_id + option.label} onClick={this.handleClick}>
            {option.amount}
          </Button>
        </OptionDiv>
      ));
    }
    return <div>Loading....</div>;
  }

  render() {
    return (
      <div>
        <OptionChosenDiv>
          {this.displayOptionChosen()}
        </OptionChosenDiv>
        <OptionsDiv>
          {this.displayOptions()}
        </OptionsDiv>
      </div>
    );
  }
}

export default Options;
