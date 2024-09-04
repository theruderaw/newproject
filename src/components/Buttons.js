import React from 'react';

function Buttons({ onButtonClick }) {
  return (
    <div>
      <button 
        type="button" 
        className="btn btn-primary mx-5 my-5" 
        style={{ width: '20vw' }}
        onClick={() => onButtonClick('India')}
      >
        India
      </button><br/>
      <button 
        type="button" 
        className="btn btn-primary mx-5 my-5" 
        style={{ width: '20vw' }}
        onClick={() => onButtonClick('USA')}
      >
        USA
      </button><br/>
      <button 
        type="button" 
        className="btn btn-primary mx-5 my-5" 
        style={{ width: '20vw' }}
        onClick={() => onButtonClick('UK')}
      >
        UK
      </button><br/>
    </div>
  );
}

export default Buttons;
