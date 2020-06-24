import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../src/Components/App';
import ItemInfo from '../src/Components/ItemInfo';
import ItemCheckout from '../src/Components/ItemCheckout';
import Options from '../src/Components/Options';

describe('<App />', () => {
  it('renders a <ItemInfo /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ItemInfo)).to.have.lengthOf(1);
  });
  it('renders a <ItemCheckout /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ItemCheckout)).to.have.lengthOf(1);
  });
  it('renders a <Options /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Options)).to.have.lengthOf(1);
  });
});
