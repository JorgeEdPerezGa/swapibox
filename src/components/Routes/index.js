import React from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav';
import People from '../../containers/People';
import Planets from '../../containers/Planets';
import Vehicles from '../../containers/Vehicles';

const Routes = () => {
  return (
    <div>
      <Route path = '/' component = { Nav }/>
      <Route path = '/people' component = { People }/>
      <Route path = '/planets' component = { Planets }/>
      <Route path = '/vehicles' component = { Vehicles }/>
    </div>
  );
};

export default Routes;
