import React, { Component } from 'react';
import Helper from '../../helper';
import CardListNav from '../../components/CardListNav';
import CardList from '../CardList';
import VehiclesVideo from '../../components/VehiclesVideo';
import PropTypes from 'prop-types';
import './style.css';

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
    if (!localStorage.getItem(url)){
      const type = 'vehicles';
      const vehicles = await this.state.helper.fetchSwapi(url, type);
      this.setState({ vehicles });
      localStorage.setItem(url, JSON.stringify(vehicles));
    } else {
      this.setState({vehicles: JSON.parse(localStorage.getItem(url))});
    }
  }

  fetchLast = () => {
    const url = 'https://swapi.co/api/vehicles/?page=4';
    this.handleFetch(url);
  }

  render() {
    return (
      <div>
        <div className = 'video-container'>
          <p className = 'page-title title-vehicles'>VEHICLES</p>
          <VehiclesVideo />
        </div>
        <CardListNav
          type = { this.state.vehicles }
          fetchFirst = { this.fetchFirst }
          handleFetch = { this.handleFetch }
          fetchLast = { this.fetchLast }/>

        <CardList
          title = { 'vehicles' }
          handleFavorites = { this.props.handleFavorites }
          type = { this.state.vehicles }/>
      </div>
    );
  }
}

Vehicles.propTypes = {
  handleFavorites: PropTypes.func
};

export default Vehicles;
