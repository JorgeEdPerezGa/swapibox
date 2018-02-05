import React from 'react';
import FavoriteButton from './index';
import setupTest from '../../setupTests';
import { shallow } from 'enzyme';

describe('<FavoriteButton/>', () => {
  const wrapper = <FavoriteButton />;

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
