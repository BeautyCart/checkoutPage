import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ItemInfo from '../src/Components/ItemInfo';

describe('<ItemInfo />', () => {
  it('renders static div correctly', () => {
    const wrapper = shallow(
      <ItemInfo
        item={{
          brand: 'Impedit',
          itemName: 'Adipisci Cream',
          reviews: 4.23,
          hearts: 5123,
          options: [{ price: 1 }, { price: 2 }, { price: 3 }],
        }}
        optionChosenIndex={0}
      />,
    );
    expect(wrapper.find('div').text()).contain('SPEND $50 FOR FREE SHIPPING');
  });
});
