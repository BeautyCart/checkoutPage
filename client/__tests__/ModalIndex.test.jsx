import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Index from '../src/Components/Modal';
import ItemInfo from '../src/Components/Modal/ItemInfo';
import Checkout from '../src/Components/Modal/Checkout';
import Carousel from '../src/Components/Modal/Carousel';

describe('<Index />', () => {
  it('renders a <ItemInfo /> component', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.find(ItemInfo)).to.have.lengthOf(1);
  });
  it('renders a <Checkout /> component', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.find(Checkout)).to.have.lengthOf(1);
  });
  it('renders a <Carousel /> component', () => {
    const wrapper = shallow(<Index />);
    expect(wrapper.find(Carousel)).to.have.lengthOf(1);
  });
});
