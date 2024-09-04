import React from 'react';
import './styles/Shower.css'; // Import the CSS file

import dog1 from '../assets/india.png';
import dog2 from '../assets/USA.png';
import dog3 from '../assets/UK.png';

function Shower({ selectedCountry }) {
  const images = {
    India: dog1,
    USA: dog2,
    UK: dog3
  };

  return (
    <div className="shower-container d-flex align-items-center justify-content-center" style={{height:"60%"}}>
      {selectedCountry ? (
        <>
          <img 
            src={images[selectedCountry]} 
            alt={selectedCountry} 
          />
          <div className="overlay">
            <p>{selectedCountry}</p>
            {/* Add additional info or text here if needed */}
          </div>
        </>
      ) : (
        <p>No country selected</p>
      )}
    </div>
  );
}

export default Shower;
