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

class UserService {
  getUserId() {
    // Temporary static ID, replace with server call later
    return 'someUserId';
  }

  getCelestialId() {
    // Replace with server call later
    const celestialId = localStorage.getItem('celestialId');
    return celestialId || 'spaceStation001';
  }

  setCelestialId(celestialId) {
    // Replace with server call later
    localStorage.setItem('celestialId', celestialId);
  }

  // Add more user-related functions here
}

export default new UserService();
