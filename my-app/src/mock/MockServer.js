import galaxyData from "../data/galaxy.json";

class MockServer {
  constructor() {
    this.data = {
      celestialId: "spaceStation001", // Current location
      starSystems: galaxyData.starSystems, // Include your star systems data
    };
    this.isTravelling = false; // Flag to indicate if travel is in progress
  }

  getCelestialId() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(this.data.celestialId), 500); // Simulate network delay
    });
  }

  setCelestialId(newCelestialId) {
    return new Promise((resolve) => {
      if (!this.isTravelling) {
        this.data.celestialId = newCelestialId;
        setTimeout(() => resolve(this.data.celestialId), 500); // Simulate network delay
      } else {
        resolve(this.data.celestialId); // Return current celestialId if in transit
      }
    });
  }

  getStarSystemOfCelestial(celestialId) {
    // Find the star system containing the celestial body
    return this.data.starSystems.find((system) =>
      system.celestialDestinations.some(
        (destination) => destination.id === celestialId
      )
    );
  }

  requestTravel(destinationId) {
    return new Promise((resolve, reject) => {
      if (this.isTravelling) {
        reject("Already travelling");
        return;
      }

      this.isTravelling = true;

      // Determine if the destination is in the same star system
      const currentSystem = this.getStarSystemOfCelestial(
        this.data.celestialId
      );
      const destinationSystem = this.getStarSystemOfCelestial(destinationId);
      const isInSameSystem =
        currentSystem &&
        destinationSystem &&
        currentSystem.id === destinationSystem.id;

      const travelTime = isInSameSystem ? 3000 : 10000; // Shorter time for same system, longer for different

      // Simulate travel time
      setTimeout(() => {
        this.data.celestialId = destinationId; // Update location upon arrival
        this.isTravelling = false;
        resolve({
          celestialId: destinationId,
          status: "Arrived",
        });
      }, travelTime); // Simulated travel time based on star system
    });
  }

  // ... Any other methods you need ...
}

export default new MockServer();
