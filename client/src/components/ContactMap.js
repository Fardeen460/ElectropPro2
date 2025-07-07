import React from 'react';
import './Contact.css';

function ContactMap() {
  return (
    <div className="map-container">
      <h3>Find Us</h3>

      <div className="map-grid">
        {/* Main Factory – Loni (UP) */}
        <div className="map-item">
          <h4>Main Factory – Loni (UP)</h4>
          <a
            href="https://www.google.com/maps/search/?api=1&query=A-61%2C+Roop+Nagar+Industrial+Area%2C+Ghaziabad+Road%2C+Loni+%28UP%29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              title="Main Factory"
              src="https://www.google.com/maps?q=A-61%2C+Roop+Nagar+Industrial+Area%2C+Ghaziabad+Road%2C+Loni+%28UP%29&output=embed"
              width="100%"
              height="340"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </a>
        </div>

        {/* Branch Office – Seelampur */}
        <div className="map-item">
          <h4>Branch Office – Seelampur, Delhi</h4>
          <a
            href="https://www.google.com/maps/search/?api=1&query=H-1083%2C+Street+No.+8%2C+Near+Madian+Masjid%2C+Chauhan+Banger%2C+New+Seelampur%2C+Delhi-110053"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              title="Branch Office"
              src="https://www.google.com/maps?q=H-1083%2C+Street+No.+8%2C+Near+Madian+Masjid%2C+Chauhan+Banger%2C+New+Seelampur%2C+Delhi-110053&output=embed"
              width="100%"
              height="340"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactMap;
