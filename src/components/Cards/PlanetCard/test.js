import React from 'react';
import PlanetCard from './index';
import setupTest from '../../../setupTests';
import { shallow } from 'enzyme';

describe('<PlanetCard/>', () => {
  const wrapper = shallow(<PlanetCard />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
