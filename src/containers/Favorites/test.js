import React from 'react';
import ReactDOM from 'react-dom';
import Favorites from './index';
import setupTest from '../../setupTests';
import { shallow } from 'enzyme';

describe('<favorites/>', () => {
  const wrapper = shallow(<Favorites type = { [] }/>);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
