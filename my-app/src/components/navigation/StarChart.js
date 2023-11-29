import React, { useState, useEffect } from 'react';
import galaxyData from '../../data/galaxy.json'; // Import the JSON data

const SVG_SIZE = 500; // Size of the SVG viewport
const MIN_X = 90000; // Minimum X coordinate from your JSON
const MAX_X = 120000; // Maximum X coordinate from your JSON
const MIN_Y = 80000; // Minimum Y coordinate from your JSON
const MAX_Y = 110000; // Maximum Y coordinate from your JSON

// Function to normalize coordinates
const normalizeCoordinates = (coordinates, minX, maxX, minY, maxY, svgSize) => {
  const normalizedX = ((coordinates.x - minX) / (maxX - minX)) * svgSize;
  const normalizedY = ((coordinates.y - minY) / (maxY - minY)) * svgSize;
  return { x: normalizedX, y: normalizedY };
};

// Function to find the star system containing the celestial destination
const findStarSystemForDestination = (destinationId) => {
  return galaxyData.starSystems.find(system =>
    system.celestialDestinations.some(dest => dest.id === destinationId)
  );
};

const StarChart = ({ celestialDestinationId }) => {
  const [systems, setSystems] = useState([]);
  const [currentSystemId, setCurrentSystemId] = useState(null);

  useEffect(() => {
    const normalizedSystems = galaxyData.starSystems.map(system => {
      const normalizedCoordinates = normalizeCoordinates(
        system.coordinates, MIN_X, MAX_X, MIN_Y, MAX_Y, SVG_SIZE
      );
      return { ...system, coordinates: normalizedCoordinates };
    });
    setSystems(normalizedSystems);

    // Find and set the current system based on the celestial destination
    const currentSystem = findStarSystemForDestination(celestialDestinationId);
    if (currentSystem) {
      setCurrentSystemId(currentSystem.id);
    }
  }, [celestialDestinationId]);

  const renderSystems = () => {
    return systems.map(system => (
      <g key={system.id}>
        <circle
          cx={system.coordinates.x}
          cy={system.coordinates.y}
          r={system.id === currentSystemId ? 10 : 5}
          fill={system.id === currentSystemId ? 'red' : 'white'}
        />
        <text
          x={system.coordinates.x + 10}
          y={system.coordinates.y}
          fill="white"
          fontSize="12"
          style={{ userSelect: 'none' }}
        >
          {system.name}
        </text>
      </g>
    ));
  };

  const renderConnections = () => {
    return systems.flatMap(system => {
      return system.nearestStars.map(nearestStar => {
        const targetSystem = systems.find(s => s.id === nearestStar.id);
        if (targetSystem) {
          return (
            <line
              key={`${system.id}-${targetSystem.id}`}
              x1={system.coordinates.x}
              y1={system.coordinates.y}
              x2={targetSystem.coordinates.x}
              y2={targetSystem.coordinates.y}
              stroke="white"
            />
          );
        }
        return null;
      });
    });
  };

  return (
    <svg width={SVG_SIZE} height={SVG_SIZE} style={{ backgroundColor: 'black' }}>
      {renderConnections()}
      {renderSystems()}
    </svg>
  );
};

export default StarChart;
