import galaxyData from '../data/galaxy.json';

export function getCelestialInfo(celestialId) {
  //console.log("getCelestialInfo received: " + celestialId);

    for (const starSystem of galaxyData.starSystems) {
        if (starSystem.id === celestialId) {
          return starSystem;
        }
        for (const celestialDestination of starSystem.celestialDestinations) {
          if (celestialDestination.id === celestialId) {
            return celestialDestination;
          }
        }
      }

  //console.log("getCelestialInfo couldn't find a celestialId." + celestialId);
  // Return null or an appropriate message if the celestialId is not found
  return null;
}

export function getStarSystem(celestialId) {
  // Loop through each star system in the galaxy data
  for (const starSystem of galaxyData.starSystems) {
    // Check if the star system contains a celestial destination with the given celestialId
    if (starSystem.celestialDestinations.some(destination => destination.id === celestialId)) {
      // If it does, return the star system
      return starSystem;
    }
  }

  // If no star system is found that contains a celestial destination with the given celestialId, return null
  return null;
}