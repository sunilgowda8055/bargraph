import React from 'react';

const GreenButton = () => {
  return (
    <button 
      style={{
        position: 'absolute', 
        top: '10px', 
        right: '10px', 
        backgroundColor: 'green', 
        color: 'white', 
        padding: '10px', 
        borderRadius: '50%', // Make it round
        border: 'none', 
        cursor: 'pointer',
        width: '20px', // Adjust size as needed
        height: '20px' // Adjust size as needed
      }}
    >
    </button>
  );
};

export default GreenButton;
