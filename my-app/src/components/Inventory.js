import React from 'react';
import Module from './Module';
import modulesData from '../data/modules.json';

const Inventory = () => {
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
