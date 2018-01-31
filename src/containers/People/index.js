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

  async componentDidMount() {
    await this.fetchPeopleData();
  }

  fetchPeopleData = async () => {
    const url = `https://swapi.co/api/people/?page=1`;
    const type = 'people';
    const people = await this.state.helper.fetchSwapi(url, type);
    this.setState({ people });
  }

  render() {
    return (
      <div>PEOPLE</div>
    );
  }
}

export default People;
