import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';
import Options from '../src/Components/Options';

describe('<Options />', () => {
  it('has 10 option tags', () => {
    const wrapper = render(
      <Options
        item={{
          brand: 'Impedit',
          itemName: 'Adipisci Cream',
          reviews: 4.23,
          hearts: 5123,
          options: [{ amount: 1 }, { amount: 2 }, { amount: 3 }],
        }}
        options={[{ amount: 1 }, { amount: 2 }, { amount: 3 }]}
        optionChosenIndex={0}
      />,
    );
    expect(wrapper.find('p').text()).contain('SIZE:1');
  });
});
