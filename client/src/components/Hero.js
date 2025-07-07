import React from 'react';
import './Hero.css';


function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background image handled by CSS ::before, no need for <img> */}
      <div className="hero-content">
        <h1>Welcome to ElectroplatePro</h1>
        <p>Trusted Electroplating Services for Industrial & Commercial Use</p>
        {/* <a href="#services" className="hero-button">Explore Services</a> */}
      </div>
    </section>
  );
}

export default Hero;
