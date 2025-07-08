// import platingImage from '../assets/plating-hero.jpg';
import electroLogo from '../assets/electro-logo.png';
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={electroLogo} alt="Electroplating Logo" className="logo-img" />
        <div className="logo-text">ElectroplatePro</div>
      </div>
      <nav className="nav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
