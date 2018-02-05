import React from 'react';
import PeopleCard from './index';
import setupTest from '../../../setupTests';
import { shallow } from 'enzyme';

describe('<PeopleCard/>', () => {
  const wrapper = shallow(<PeopleCard />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
