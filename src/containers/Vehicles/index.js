import React, { Component } from 'react';
import Helper from '../../helper';
import CardListNav from '../../components/CardListNav';
import CardList from '../CardList';

class Vehicles extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({ helper: new Helper(), vehicles: '' });
  }

  componentDidMount() {
    this.fetchFirst();
  }

  fetchFirst = () => {
    const url = 'https://swapi.co/api/vehicles/?page=1';
    this.handleFetch(url);
  };

  handleFetch = async (url) => {
    const type = 'vehicles';
    const vehicles = await this.state.helper.fetchSwapi(url, type);
    this.setState({ vehicles });
  }

  fetchLast = () => {
    const url = 'https://swapi.co/api/vehicles/?page=4';
    this.handleFetch(url);
  }

  render() {
    console.log(this.state.vehicles);

    return (
      <div>
        <p>VEHICLES</p>
        <CardListNav
          type = { this.state.vehicles }
          fetchFirst = { this.fetchFirst }
          handleFetch = { this.handleFetch }
          fetchLast = { this.fetchLast }/>

        <CardList
          title = { 'vehicles' }
          type = { this.state.vehicles }/>
      </div>
    );
  }
}

export default Vehicles;
