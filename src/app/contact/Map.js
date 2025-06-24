import React from 'react';
const Map = () => {
  return (
    <div style={{ width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3060.0234567890123!2d32.8597!3d39.9334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU2JzAwLjIiTiAzMsKwNTEnMzQuOSJF!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Otel Konumu"
      ></iframe>
    </div>
  );
};

export default Map;