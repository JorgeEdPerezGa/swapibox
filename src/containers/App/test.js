import React from 'react';
import ReactDOM from 'react-dom';
import App from './index';
import setupTest from '../../setupTests';
import { shallow } from 'enzyme';

describe('<App/>', () => {
  const wrapper = shallow(<App />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
