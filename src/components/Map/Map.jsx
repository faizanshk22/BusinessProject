import React from 'react';
import './Map.scss';

function Map() {
  return (
    <div className="map-section">
      <div className="gmap-frame">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.324722623974!2d74.26426427645264!3d31.487757074229012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190343fd89165f%3A0xc46d3dd8aaee56af!2sAzam%20Gardens%20Main%20Park!5e0!3m2!1sen!2s!4v1764613562120!5m2!1sen!2s"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
