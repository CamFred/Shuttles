import React from 'react';
import Module from './Module';
import { getModulesInventory  } from '../services/spaceportModulesInventory';

const Inventory = () => {
  const spaceport = 'someSpaceport'; // Replace this with the actual spaceport
  const modulesData = getModulesInventory(spaceport); // Use the service to get the inventory

  return (
    <div id="inventory">
      {modulesData.map(module => (
        <Module
          key={module.id}
          name={module.name}
          tier={module.tier}
          icon={module.icon}
        />
      ))}
    </div>
  );
};

export default Inventory;
