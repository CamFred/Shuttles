/**
 * This module provides a service for fetching the inventory of modules available at a spaceport.
 *
 * The getModulesInventory function currently returns static data from a JSON file.
 * The spaceport parameter is ignored for now.
 *
 * In the future, this function will be updated to fetch the inventory from a database.
 * The spaceport parameter will be used to fetch the inventory specific to the given spaceport.
 *
 * By abstracting the inventory fetching logic into this service, we can avoid having to update
 * the inventory data in multiple places in our codebase when we switch from using static data to fetching it from the database.
 */
import modulesData from "../data/modules.json";

export function getModulesInventory(spaceport) {
  // For now, ignore the spaceport parameter and return the static data
  return modulesData;

  // Later, replace the above line with code to fetch the inventory from the database based on the spaceport
}
