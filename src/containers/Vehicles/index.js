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

  fetchVehicles = async () => {
    const url = 'https://swapi.co/api/vehicles/?page=1';
    const type = 'vehicles';
    const vehicles = await this.state.helper.fetchSwapi(url, type);
    this.setState({ vehicles });
  }

  render() {
    console.log(this.state);
    return (
      <div>VEHICLES</div>
    );
  }
}

export default Vehicles;
