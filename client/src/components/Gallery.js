import React from 'react';
import './Gallery.css';

// Import all 9 images from /assets
import img1 from '../assets/gallery1.png';
import img2 from '../assets/gallery2.png';
import img3 from '../assets/gallery3.png';
import img4 from '../assets/gallery4.png';
import img5 from '../assets/gallery5.png';
import img6 from '../assets/gallery6.png';
import img7 from '../assets/gallery7.png';
import img8 from '../assets/gallery8.png';
import img9 from '../assets/gallery9.jpeg';

function Gallery() {
  const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9]; 

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Our Work</h2>
        <p className="gallery-intro">Here are some glimpses of our recent plating projects and precision work.</p>
        <div className="gallery-grid">
          {galleryImages.map((img, idx) => (
            <div className="gallery-item" key={idx}>
              <img src={img} alt={`Gallery ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
