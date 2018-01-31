import React from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav';
import People from '../../containers/People';

const Routes = () => {
  return (
    <div>
      <Route path = '/' component = { Nav }/>
      <Route path = '/people' component = { People }/>
    </div>
  );
};

export default Routes;
