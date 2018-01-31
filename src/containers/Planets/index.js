import React, { Component } from 'react';
import Helper from '../../helper';

class Planets extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({ helper: new Helper() });
  }

  componentDidMount() {
    this.fetchPlanets();
  }

  fetchPlanets = async () => {
    const url = 'https://swapi.co/api/planets/?page=1';
    const type = 'planets';
    const planets = await this.state.helper.fetchSwapi(url, type);
    this.setState({ planets });
  };

  render() {
    console.log(this.state);
    return (
      <div>PLANETS</div>
    );
  }
}

export default Planets;
