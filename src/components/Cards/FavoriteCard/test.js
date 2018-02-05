import React from 'react';
import FavoriteCard from './index';
import setupTest from '../../../setupTests';
import { shallow } from 'enzyme';

describe('<FavoriteCard/>', () => {
  const wrapper = <FavoriteCard />;

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
