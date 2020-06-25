import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import ItemCheckout from '../src/Components/ItemCheckout';

describe('<ItemCheckout />', () => {
  it('has 10 option tags', () => {
    const wrapper = shallow(
      <ItemCheckout
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
    expect(wrapper.find('option')).to.have.lengthOf(10);
  });
});
