import React from 'react';
import '../css/Module.css'; // Assuming you have a CSS file for styling

const Module = ({ name, tier, icon }) => {
  return (
    <div className="module">
      <div
        className="module-icon"
        style={{ backgroundImage: `url(/shuttles/images/icons/${icon})` }} 
      />
      <div className="module-name">{name}</div>
      {/* Add more module details as needed */}
    </div>
  );
};

export default Module;
