import React from 'react';
import './About.css';
import img1 from '../assets/img1.jpg'; // <-- Import the image

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">Electroplating Excellence Since 1980</h2>

        <p className="about-description">
          For over <strong>44 years</strong>, we’ve been redefining the standards of <strong>precision plating</strong>. Our business is built on a foundation of <strong>durability, shine, and trust</strong> — offering a wide range of electroplating services for both <strong>industrial and commercial</strong> needs.
        </p>

        <ul className="about-services">
          <li>Nickel</li>
          <li>Chrome</li>
          <li>Copper</li>
          <li>Black Nickel</li>
          <li>Brass Plating</li>
          <li>Zinc</li>
          <li>Copper-Nickel</li>
          <li>Black Oxide</li>
        </ul>

        <p className="about-description">
          Every project is handled with <strong>craftsmanship and care</strong>, thanks to our <strong>highly skilled technicians</strong> and <strong>modern plating infrastructure</strong>. Whether it’s a one-time restoration or large-scale production, our custom plating solutions deliver a flawless, long-lasting finish — tailored to your needs.
        </p>

        {/* 🖼️ New image block here */}
        <div className="about-image">
          <img src={img1} alt="Electroplating sample" />
        </div>

        <div className="about-location">
          <p><strong>Main Factory:</strong> A-61, Roop Nagar Industrial Area, Ghaziabad Road, Loni (UP)</p>
          <p><strong>Branch Office:</strong> H-1083, Street No. 8, Near Madian Masjid, Chauhan Banger, New Seelampur, Delhi-110053</p>
        </div>

        <div className="about-contact">
          <p><strong>Call us:</strong> 9911642786 | 9811642786 | 9355642786</p>
          <p>📍 Serving businesses across Delhi NCR and North India with pride and performance.</p>
        </div>

        <blockquote className="about-quote">
          “When shine, strength, and perfection matter — trust us to deliver.”
        </blockquote>
      </div>
    </section>
  );
}

export default About;
