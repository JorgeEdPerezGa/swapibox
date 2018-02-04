import React from 'react';
import { Route } from 'react-router-dom';
import Nav from '../Nav';
import Scroll from '../../containers/Scroll';
import People from '../../containers/People';
import Planets from '../../containers/Planets';
import Vehicles from '../../containers/Vehicles';
import Favorites from '../../containers/Favorites';

const Routes = () => {
  return (
    <div>
      <Route path = '/' component = { Nav }/>
      <Route exact path = '/' component = { Scroll }/>
      <Route path = '/people' component = { People }/>
      <Route path = '/planets' component = { Planets }/>
      <Route path = '/vehicles' component = { Vehicles }/>
      <Route path = '/favorites' component = { Favorites }/>
    </div>
  );
};

export default Routes;
