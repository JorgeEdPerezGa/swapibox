import React, { Component } from 'react';
import Helper from '../../helper';
import CardListNav from '../../components/CardListNav';
import CardList from '../CardList';
import PeopleVideo from '../../components/PeopleVideo';
import './style.css';

class People extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({ helper: new Helper(), people: '' });
  }

  componentDidMount() {
    this.fetchFirst();
  }

  fetchFirst = () => {
    const url = 'https://swapi.co/api/people/?page=1';
    this.handleFetch(url);
  }

  handleFetch = async (url) => {
    if (!localStorage.getItem(url)){
      const type = 'people';
      const people = await this.state.helper.fetchSwapi(url, type);
      this.setState({ people });
      localStorage.setItem(url, JSON.stringify(people));
    } else {
      this.setState({people: JSON.parse(localStorage.getItem(url))});
    }
  }

  fetchLast = async () => {
    const url = 'https://swapi.co/api/people/?page=9';
    this.handleFetch(url);
  }

  render() {

    return (
      <div>
        <div className = 'video-container'>
          <PeopleVideo />
        </div>
        <CardListNav
          type = { this.state.people }
          fetchFirst = { this.fetchFirst }
          handleFetch = { this.handleFetch }
          fetchLast = { this.fetchLast }/>
        <CardList
          title = { 'people' }
          handleFavorites = { this.props.handleFavorites }
          type = { this.state.people }/>
      </div>
    );
  }
}

export default People;
