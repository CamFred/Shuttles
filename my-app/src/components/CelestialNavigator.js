import React, { useEffect, useState } from 'react';

import { getStarSystem } from '../services/galaxyMap';

const CelestialNavigator = ({ celestialId, onCelestialChange }) => {
  const [celestialInfo, setCelestialInfo] = useState(null);

  useEffect(() => {
    const starSystem = getStarSystem(celestialId);
  
    if (!starSystem) {
      setCelestialInfo(null);
    } else {
      const celestialObject = starSystem.celestialDestinations.find(destination => destination.id === celestialId);
      setCelestialInfo(celestialObject);
    }
  }, [celestialId]);

  const handleItemClick = (id) => {
    onCelestialChange(id); // Use the passed function to update the celestialId
  };
  



  if (!celestialInfo) {
    return <p>Celestial destination not found.</p>;
  }

  // Find the star system that contains the celestial destination
  const starSystem = getStarSystem(celestialId);

  if (!starSystem) {
    return <p>Star system not found.</p>;
  }

  return (
<div>
  <h3>Celestial Destinations in {starSystem.name}</h3>
  <ul>
    {starSystem.celestialDestinations.map((destination) => (
      <li key={destination.id}>
        <a href="#" onClick={(e) => {e.preventDefault(); handleItemClick(destination.id);}}>
          {destination.name}
        </a>
      </li>
    ))}
  </ul>

  <h3>Nearest Stars to {starSystem.name}</h3>
  <ul>
    {starSystem.nearestStars.map((star) => (
      <li key={star.id}>
        {star.id} - {star.distance} AU
      </li>
    ))}
  </ul>
</div>
  );
}
export default CelestialNavigator;