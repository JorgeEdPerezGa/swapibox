import React from 'react';
import CardListNav from './index';
import setupTest from '../../setupTests';
import { shallow } from 'enzyme';

describe('<CardListNav/>', () => {
  const wrapper = shallow(<CardListNav />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
