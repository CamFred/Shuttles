import React from "react";

const NavigationControls = ({ destination, setDestination, onEngage }) => {
  const handleEngage = () => {
    onEngage(destination.id); // Engage using the ID
  };

  return (
    <div className="navigation-controls">
      <input
        type="text"
        placeholder="Enter destination"
        value={destination.name} // Display the name
        onChange={(e) =>
          setDestination({ ...destination, name: e.target.value })
        }
        readOnly // Make it read-only if the input shouldn't be editable
      />
      <button onClick={handleEngage} disabled={!destination.id}>
        Engage
      </button>
    </div>
  );
};

export default NavigationControls;
