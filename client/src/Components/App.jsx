import React from 'react';
import ReactDOM from 'react-dom';
import ItemInfo from './ItemInfo.jsx';
import ItemCheckout from './ItemCheckout.jsx'
import Options from './Options.jsx'

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ItemInfo />
        <ItemCheckout/>
        <Options />
      </div>
    )
  }
}

export default App