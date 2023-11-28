/**
 * This function is a placeholder for fetching the user ID.
 * Currently, it returns a static ID for development purposes.
 * 
 * In the future, this function will be updated to fetch the user ID from a database.
 * This will allow us to dynamically assign user IDs based on the logged-in user.
 * 
 * By abstracting the user ID fetching logic into this function, we can avoid
 * having to update the user ID in multiple places in our codebase when we switch
 * from using a static ID to fetching it from the database.
 */
export function getUserId() {
    // For now, return a static ID
    return 'someUserId';

    // Later, replace the above line with code to fetch the user ID from the database
}

export function getCelestialId() {
    // Get the celestialId from local storage
    const celestialId = localStorage.getItem('celestialId');

    // If there's no celestialId in local storage, return a default ID
    //console.log(celestialId);
    return celestialId || 'spaceStation001';

    // Later, replace the above line with code to fetch the user ID from the database
}

export function setCelestialId(celestialId) {
    // Store the specified celestialId in local storage
    localStorage.setItem('celestialId', celestialId);
}