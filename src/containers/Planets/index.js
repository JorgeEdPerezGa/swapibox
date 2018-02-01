import React, { Component } from 'react';
import Helper from '../../helper';

class Planets extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({ helper: new Helper(), planets: '' });
  }

  componentDidMount() {
    this.fetchPlanets();
  }

  fetchPlanets = () => {
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
    const fetch = this.state.planets;

    return (
      <div>
        <p>PLANETS</p>
        <button
          onClick = { () => this.fetchPlanets() }
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

export default Planets;
