import React, { Component } from 'react';
import Helper from '../../helper';

class Vehicles extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({ helper: new Helper(), vehicles: '' });
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
          onClick = { () => this.fetchVehicles() }
          disabled = {!fetch || !fetch.previous}>{'<<'}</button>
        <button
          onClick = { () => this.handleFetch(fetch.previous) }
          disabled = {!fetch || !fetch.previous}>{'<'}</button>
        <button
          onClick = { () => this.handleFetch(fetch.next) }
          disabled = {!fetch || !fetch.next}>{'>'}</button>
        <button
          onClick = { () => this.fetchLast() }
          disabled = {!fetch || !fetch.next}>{'>>'}</button>
      </div>
    );
  }
}

export default Vehicles;
