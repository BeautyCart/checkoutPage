import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ItemInfo from '../src/Components/ItemInfo';

describe('<ItemInfo />', () => {
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
