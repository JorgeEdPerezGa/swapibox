import React, { Component } from 'react';
import Helper from '../../helper';
import CardListNav from '../../components/CardListNav';
import CardList from '../CardList';
import PlanetsVideo from '../../components/PlanetsVideo';
import PropTypes from 'prop-types';
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
    return (
      <div>
        <div className = 'video-container'>
          <p className = 'page-title title-planets'>PLANETS</p>
          <div className = 'planets-video-container'>
            <PlanetsVideo />
          </div>
        </div>
        <CardListNav
          type = { this.state.planets }
          fetchFirst = { this.fetchFirst }
          handleFetch = { this.handleFetch }
          fetchLast = { this.fetchLast }/>

        <CardList
          title = { 'planets' }
          handleFavorites = { this.props.handleFavorites }
          type = { this.state.planets }/>
      </div>
    );
  }
}

Planets.propTypes = {
  handleFavorites: PropTypes.func
};

export default Planets;
