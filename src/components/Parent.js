import React, { useState } from 'react';
import Buttons from './Buttons';
import Shower from './Shower';

function App() {
  const [selectedCountry, setSelectedCountry] = useState('India');

  const handleButtonClick = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className='d-flex align-items-center justify-content-center'>
      <Buttons onButtonClick={handleButtonClick} />
      <Shower selectedCountry={selectedCountry}/>
    </div>
  );
}

export default App;
