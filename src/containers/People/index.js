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

    return (
      <div>
        <p>PEOPLE</p>
        <button
          onClick = { () => this.fetchPeople() }
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

export default People;
