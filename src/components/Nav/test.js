import React from 'react';
import Nav from './index';
import setupTest from '../../setupTests';
import { shallow } from 'enzyme';

describe('<Nav/>', () => {
  const wrapper = <Nav />;

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
