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
    const scroll = this.state.scroll;
    if (!this.state.scroll) {
      return (
        <div>loading</div>
      );
    }

    return (
      <div className='scroll'>
        <div className='fade'></div>
        <div className='star-wars'>
          <div className='crawl'>
            <p className='title'>{ scroll.title }</p>
            <p className='episode'>{ scroll.episode }</p>
            <p className='text'>{ scroll.text }</p>
          </div>
        </div>
      </div>
//       {/* <div className="star-wars-intro">
//
//   {/* <!-- Blue Intro Text --> */}
//   <p class="intro-text">
//     A few days ago, during...
//   </p>
//
//   {/* <!-- Logo Image or Text goes in here --> */}
//   {/* <h2 class="main-logo">
//     <img src="img/star-wars-intro.png">
//   </h2> */}
// {/*
//   <!-- All Scrolling Content Goes in here --> */}
//   <div className="main-content">
//
//     <div className="title-content">
//       <p className="content-header">{ scroll.episode }</p>
//
//       <p className="content-body">
//       { scroll.text }
//       </p>
//
//       {/* <a class="space-button">Download The Code Now!</a> */}
//
//     </div>
//   </div>
// </div> */}
    );
  }
}

export default Scroll;
