import React from 'react';
import video from '../../assets/people.mp4';
import './style.css';

const PeopleVideo = () => {
  return (
    <div>
      <video
        poster = { video }
        className = 'background-video'
        playsInline
        autoPlay
        muted
        loop >
        <source
          src = { video }
          type = 'video/mp4'>
        </source>
      </video>
    </div>
  );
};

export default PeopleVideo;
