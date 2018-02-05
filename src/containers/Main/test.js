import React from 'react';
import ReactDOM from 'react-dom';
import Main from './index';
import setupTest from '../../setupTests';
import { shallow } from 'enzyme';

describe('<Main/>', () => {
  const wrapper = shallow(<Main />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
