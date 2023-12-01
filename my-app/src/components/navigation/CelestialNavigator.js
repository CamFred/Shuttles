import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
//import "../../css/CelestialNavigator.css";
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
  const [currentCelestialName, setCurrentCelestialName] = useState("");

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
      setCurrentCelestialName("");
    }
  }, [celestialId]);

  const handleItemClick = (id, name) => {
    onCelestialChange(id, name); // Pass both ID and name
  };

  if (isTraveling) {
    // Display warping message when traveling
    return (
      <div>
        <h2 class="text-primary-emphasis">Warp</h2>
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
    <div>
      <h2>{starSystem.name}</h2>
      <h4 class="text-primary-emphasis">Star System</h4>
      <p>{starSystem.description}</p>
      <ListGroup as="ul">
        {starSystem.celestialDestinations.map((destination) =>
          destination.id === celestialId ? (
            <ListGroup.Item active>{destination.name}</ListGroup.Item>
          ) : (
            <ListGroup.Item
              action
              onClick={() => handleItemClick(destination.id, destination.name)}
            >
              {destination.name}
            </ListGroup.Item>
          )
        )}
      </ListGroup>
    </div>
  );
};

export default CelestialNavigator;
