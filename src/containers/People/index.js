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

  handleMore = async () => {
    if (this.state.people.next) {
      const url = this.state.people.next;
      const type = 'people';
      const people = await this.state.helper.fetchSwapi(url, type);
      this.setState({ people });
    }
  }

  render() {
    console.log(this.state.people);
    return (
      <div>
        <p>PEOPLE</p>
        <button>go back</button>
        <button onClick = { () => this.handleMore() }>more</button>
      </div>
    );
  }
}

export default People;
