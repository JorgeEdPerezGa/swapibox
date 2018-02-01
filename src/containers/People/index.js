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

  fetchPeople = async () => {
    const url = 'https://swapi.co/api/people/?page=1';
    const type = 'people';
    const people = await this.state.helper.fetchSwapi(url, type);
    this.setState({ people });
  }

  handleNext = async () => {
    if (this.state.people.next) {
      const url = this.state.people.next;
      const type = 'people';
      const people = await this.state.helper.fetchSwapi(url, type);
      this.setState({ people });
    }
  }

  handlePrevious = async() => {
    if (this.state.people.previous) {
      const url = this.state.people.previous;
      const type = 'people';
      const people = await this.state.helper.fetchSwapi(url, type);
      this.setState({ people });
    }
  }

  handleLast = async () => {
    const url = 'https://swapi.co/api/people/?page=9';
    const type = 'people';
    const people = await this.state.helper.fetchSwapi(url, type);
    this.setState({ people });
  }

  handleFirst = async () => {
    const url = 'https://swapi.co/api/people/?page=1';
    const type = 'people';
    const people = await this.state.helper.fetchSwapi(url, type);
    this.setState({ people });
  }

  render() {
    console.log(this.state.people);
    return (
      <div>
        <p>PEOPLE</p>
        <button onClick = { () => this.handleFirst() }>{'<<'}</button>
        <button onClick = { () => this.handlePrevious() }>{'<'}</button>
        <button onClick = { () => this.handleNext() }>{'>'}</button>
        <button onClick = { () => this.handleLast() }>{'>>'}</button>
      </div>
    );
  }
}

export default People;
