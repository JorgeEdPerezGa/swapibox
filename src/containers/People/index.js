import React, { Component } from 'react';
import Helper from '../../helper';
import CardListNav from '../../components/CardListNav';

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
    const type = 'people';
    const people = await this.state.helper.fetchSwapi(url, type);
    this.setState({ people });
  }

  fetchLast = async () => {
    const url = 'https://swapi.co/api/people/?page=9';
    this.handleFetch(url);
  }

  render() {
    console.log(this.state.people);

    return (
      <div>
        <p>PEOPLE</p>
        <CardListNav
          type = { this.state.people }
          fetchFirst = { this.fetchFirst }
          handleFetch = { this.handleFetch }
          fetchLast = { this.fetchLast }/>
      </div>
    );
  }
}

export default People;
