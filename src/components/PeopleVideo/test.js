import React from 'react';
import PeopleVideo from './index';
import setupTest from '../../setupTests';
import { shallow } from 'enzyme';

describe('<PeopleVideo/>', () => {
  const wrapper = <PeopleVideo />;

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
