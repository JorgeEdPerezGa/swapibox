import React, { Component } from 'react';
import Helper from '../../helper';
import CardListNav from '../../components/CardListNav';
import CardList from '../CardList';
import PlanetsVideo from '../../components/PlanetsVideo';
import './style.css';

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
    if (!localStorage.getItem(url)){
      const type = 'planets';
      const planets = await this.state.helper.fetchSwapi(url, type);
      this.setState({ planets });
      localStorage.setItem(url, JSON.stringify(planets));
    } else {
      this.setState({planets: JSON.parse(localStorage.getItem(url))});
    }
  }

  fetchLast = () => {
    const url = 'https://swapi.co/api/planets/?page=7';
    this.handleFetch(url);
  }

  render() {
    console.log(this.state.planets);

    return (
      <div>
        <PlanetsVideo />
        <CardListNav
          type = { this.state.planets }
          fetchFirst = { this.fetchFirst }
          handleFetch = { this.handleFetch }
          fetchLast = { this.fetchLast }/>

        <CardList
          title = { 'planets' }
          type = { this.state.planets }/>
      </div>
    );
  }
}

export default Planets;
