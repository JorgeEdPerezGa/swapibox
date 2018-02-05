import React from 'react';
import video from '../../assets/vehicles.mp4';
import './style.css';

const VehiclesVideo = () => {
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

export default VehiclesVideo;
