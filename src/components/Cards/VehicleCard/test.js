import React from 'react';
import VehicleCard from './index';
import setupTest from '../../../setupTests';
import { shallow } from 'enzyme';

describe('<VehicleCard/>', () => {
  const wrapper = shallow(<VehicleCard />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
