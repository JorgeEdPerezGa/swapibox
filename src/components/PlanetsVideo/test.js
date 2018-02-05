import React from 'react';
import PlanetVideo from './index';
import setupTest from '../../setupTests';
import { shallow } from 'enzyme';

describe('<PlanetVideo/>', () => {
  const wrapper = <PlanetVideo />;

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
