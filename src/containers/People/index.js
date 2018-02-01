import React, { Component } from 'react';
import Helper from '../../helper';

class People extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({ helper: new Helper(), people: '' });
  }

  componentDidMount() {
    this.fetchPeople();
  }

  fetchPeople = () => {
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
    const fetch = this.state.people;
    const disabledPrevious = !fetch || !fetch.previous;
    const disabledNext = !fetch || !fetch.next;

    return (
      <div>
        <p>PEOPLE</p>
        <button
          onClick = { () => this.fetchPeople() }
          disabled = { disabledPrevious }>{'<<'}</button>
        <button
          onClick = { () => this.handleFetch(fetch.previous) }
          disabled = { disabledPrevious }>{'<'}</button>
        <button
          onClick = { () => this.handleFetch(fetch.next) }
          disabled = { disabledNext }>{'>'}</button>
        <button
          onClick = { () => this.fetchLast() }
          disabled = { disabledNext }>{'>>'}</button>
      </div>
    );
  }
}

export default People;
