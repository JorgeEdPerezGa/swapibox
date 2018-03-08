import React, { Component } from 'react';
import './style.css';

class Scroll extends Component {
  constructor(){
    super();
    this.state = {};
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
    // const scroll = this.state.scroll;
    // if (!this.state.scroll) {
    //   return (
    //     <div>loading</div>
    //   );
    // }

    return (
      <div className='scroll'>
        <p className='main-page-title'>SWAPIBOX</p>
        <p className='main-page-description'>STAR WARS ENCYCLOPEDIA</p>
        {/* <div className='fade'></div>
        <div className='star-wars'>
          <div className='crawl'> */}
            {/* <p className='title'>{ scroll.title }</p>
            <p className='episode'>{ scroll.episode }</p>
            <p className='text'>{ scroll.text }</p> */}
          {/* </div>
        </div> */}
      </div>
    );
  }
}

export default Scroll;
