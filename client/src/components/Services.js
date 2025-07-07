import React from 'react';
import './Services.css';

function Services() {
  const services = [
    'Nickel Plating',
    'Chrome Plating',
    'Copper Plating',
    'Black Nickel',
    'Brass Plating',
    'Black Oxide',
    'Zinc Plating',
    'Copper-Nickel',
    'Custom Plating Solutions'
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <p className="services-intro">
          We offer a wide range of high-quality electroplating services for diverse industries and custom applications.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
