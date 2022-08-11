import React from 'react';
import  './Main.css';
import portafolio from '../media/portafolio.mp4';

const Main = () => {
  return (
   <div className='cover-container'>
    <video className='video' src={portafolio} autoPlay loop muted />
    <h1>HUGO CARRASCO</h1>
    <p>  Developer || Full Stack || Front End  </p>
   </div>
  )
}

export default Main;