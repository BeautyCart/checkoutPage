import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../src/Components/App';
import ItemInfo from '../src/Components/ItemInfo';

describe('<App />', () => {
  it('renders a <ItemInfo /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(ItemInfo)).to.have.lengthOf(1);
  });
});
