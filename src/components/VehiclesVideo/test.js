import React from 'react';
import VehicleVideo from './index';
import setupTest from '../../setupTests';
import { shallow } from 'enzyme';

describe('<VehicleVideo/>', () => {
  const wrapper = <VehicleVideo />;

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
