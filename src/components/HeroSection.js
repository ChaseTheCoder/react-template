import React from 'react';
import '../App.css';
// import video1 from './video/video.1.mp4';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="videos/kinder-small-group.mp4" autoPlay loop muted />
      <h1>North Elementary School</h1>
      <p>Home of the Eagles!</p>
      <div className="hero-btn">
        <Button className="btns" buttonStyle="btn--outline"
        buttonSize="btn--large">
          GET STARTED
        </Button>
        <Button className="btns" buttonStyle="btn--primary"
        buttonSize="btn--large">
          Learn about our school. <i className="far fa-play-cirlce" />
        </Button>
      </div>
    </div>
  )
}

export default HeroSection