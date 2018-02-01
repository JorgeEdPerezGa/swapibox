import React, { Component } from 'react';
import Helper from '../../helper';

class People extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    this.setState({ helper: new Helper() });
  }

  componentDidMount() {
    this.fetchPeople();
  }

  handleState = async (url) => {
    const type = 'people';
    const people = await this.state.helper.fetchSwapi(url, type);
    this.setState({ people });
  }

  fetchPeople = () => {
    const url = 'https://swapi.co/api/people/?page=1';
    this.handleState(url);
  }

  fetchNext = () => {
    if (this.state.people.next) {
      const url = this.state.people.next;
      this.handleState(url);
    }
  }

  fetchPrevious = async() => {
    if (this.state.people.previous) {
      const url = this.state.people.previous;
      this.handleState(url);
    }
  }

  fetchLast = async () => {
    const url = 'https://swapi.co/api/people/?page=9';
    this.handleState(url);
  }

  render() {
    console.log(this.state.people);
    return (
      <div>
        <p>PEOPLE</p>
        <button onClick = { () => this.fetchPeople() }>{'<<'}</button>
        <button onClick = { () => this.fetchPrevious() }>{'<'}</button>
        <button onClick = { () => this.fetchNext() }>{'>'}</button>
        <button onClick = { () => this.fetchLast() }>{'>>'}</button>
      </div>
    );
  }
}

export default People;
