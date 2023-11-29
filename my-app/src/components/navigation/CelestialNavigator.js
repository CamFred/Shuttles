import React, { useEffect, useState } from "react";
import "../../css/CelestialNavigator.css";
import {
  getIconUrl,
  getStarSystem,
  getStarSystemById,
  getCelestialInfo,
} from "../../services/galaxyMap";

const CelestialNavigator = ({
  celestialId,
  destination,
  isTraveling,
  onCelestialChange,
}) => {
  const [starSystem, setStarSystem] = useState(null);
  const [currentCelestialName, setCurrentCelestialName] = useState('');


  // useEffect(() => {
  //   const system = getStarSystem(celestialId);
  //   setStarSystem(system);
  // }, [celestialId]);

  useEffect(() => {
    const system = getStarSystem(celestialId);
    setStarSystem(system);

    const celestialInfo = getCelestialInfo(celestialId);
    if (celestialInfo) {
      setCurrentCelestialName(celestialInfo.name);
    } else {
      setCurrentCelestialName('');
    }
  }, [celestialId]);

  const handleItemClick = (id, name) => {
    onCelestialChange(id, name); // Pass both ID and name
  };

  if (isTraveling) {
    // Display warping message when traveling
    return (
      <div className="celestial-navigator">
        <h3>Warping</h3>
        <p>
          Warping from {currentCelestialName} to {destination.name}.
        </p>
      </div>
    );
  }

  if (!starSystem) {
    return <p>Star system not found.</p>;
  }

  return (
    <div className="celestial-navigator">
      <h3>Celestial Destinations in {starSystem.name}</h3>
      <ul>
        {/* Render the current location separately */}
        {starSystem.celestialDestinations
          .filter((destination) => destination.id === celestialId)
          .map((destination) => (
            <li key={destination.id}>
              <span>
                <img
                  src={getIconUrl(destination)}
                  alt={destination.type}
                  height="30"
                  width="30"
                />
                {destination.name} (Current Location)
              </span>
            </li>
          ))}

        {/* Render other destinations */}
        {starSystem.celestialDestinations
          .filter((destination) => destination.id !== celestialId)
          .map((destination) => (
            <li key={destination.id}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleItemClick(destination.id, destination.name);
                }}
              >
                <img
                  src={getIconUrl(destination)}
                  alt={destination.type}
                  height="30"
                  width="30"
                />
                {destination.name}
              </a>
            </li>
          ))}
      </ul>

      <h3>Nearest Stars to {starSystem.name}</h3>
      <ul>
        {starSystem.nearestStars.map((starId) => {
          const star = getStarSystemById(starId.id);
          return (
            <li key={star.id}>
              {star.name} - {starId.distance} AU
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CelestialNavigator;
