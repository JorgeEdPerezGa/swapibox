import React from 'react';
import ReactDOM from 'react-dom';
import CardList from './index';
import setupTest from '../../setupTests';
import { shallow } from 'enzyme';

describe('<CardList/>', () => {
  const wrapper = shallow(<CardList />);

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
