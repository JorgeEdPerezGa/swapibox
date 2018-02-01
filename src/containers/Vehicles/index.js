import React, { Component } from 'react';
import Helper from '../../helper';

class Vehicles extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({ helper: new Helper() });
  }

  componentDidMount() {
    this.fetchVehicles();
  }

  fetchVehicles = () => {
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
    const fetch = this.state.vehicles;

    return (
      <div>
        <p>VEHICLES</p>
        <button
          onClick = { () => this.fetchVehicles() }>{'<<'}</button>
        <button
          onClick = { () => this.handleFetch(fetch.previous) }>{'<'}</button>
        <button
          onClick = { () => this.handleFetch(fetch.next) }>{'>'}</button>
        <button
          onClick = { () => this.fetchLast() }>{'>>'}</button>
      </div>
    );
  }
}

export default Vehicles;
