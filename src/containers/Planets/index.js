import React, { Component } from 'react';
import Helper from '../../helper';
import CardListNav from '../../components/CardListNav';

class Planets extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({ helper: new Helper(), planets: '' });
  }

  componentDidMount() {
    this.fetchFirst();
  }

  fetchFirst = () => {
    const url = 'https://swapi.co/api/planets/?page=1';
    this.handleFetch(url);
  };

  handleFetch = async (url) => {
    const type = 'planets';
    const planets = await this.state.helper.fetchSwapi(url, type);
    this.setState({ planets });
  }

  fetchLast = () => {
    const url = 'https://swapi.co/api/planets/?page=7';
    this.handleFetch(url);
  }

  render() {
    console.log(this.state.planets);

    return (
      <div>
        <p>PLANETS</p>
        <CardListNav
          type = { this.state.planets }
          fetchFirst = { this.fetchFirst }
          handleFetch = { this.handleFetch }
          fetchLast = { this.fetchLast }/>
      </div>
    );
  }
}

export default Planets;
