import React, { Component } from 'react';

class Scroll extends Component {
  constructor(){
    super();
    this.state = {}
  }

  componentDidMount() {
    this.fetchScrolls();
  }

  async fetchScrolls(){
    let number = await Math.floor(Math.random() * (7) * 1);
    let fetchScrollsData = await fetch(`https://swapi.co/api/films/${number}`);
    let fetchScrolls = await fetchScrollsData.json();
    let title = fetchScrolls.title;
    let episode = fetchScrolls.episode_id;
    let text = fetchScrolls.opening_crawl;
    let scroll = {title, episode, text};
    this.setState( { scroll } );
  }

  render (){
    const scroll = this.state.scroll
    console.log(this.state);
    if (!this.state.scroll) {
      return (
        <div>loading</div>
      );
    }

    return (
      <div className='scroll'>
        scroll
        <div className='fade'>
        </div>
        <div className='star-wars'>
          <div className='crawl'>
            <p className='film-title'>{ scroll.title }</p>
            <p className='release-date'>{ scroll.episode }</p>
            <p className='crawl-text'>{ scroll.text }</p>
          </div>
        </div>
      </div>
    );
  }
};

export default Scroll;
