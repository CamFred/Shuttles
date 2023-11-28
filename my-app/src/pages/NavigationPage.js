import React, { useState } from 'react';
import Layout from '../components/Layout';
import DraggableWindow from '../components/DraggableWindow';
import SystemOverview from '../components/SystemOverview';  
import Viewport from '../components/Viewport';
import CelestialNavigator from '../components/CelestialNavigator';
import NavigationControls from '../components/NavigationControls';
import { getUserId, getCelestialId, setCelestialId } from '../services/user';

const NavigationPage = () => {
  const userId = getUserId();
  const [celestialId, setLocalCelestialId] = useState(getCelestialId());
  const [destination, setDestination] = useState({ id: '', name: '' });


  const handleCelestialChange = (id, name) => {
    setDestination({ id, name }); // Update the destination
    //setLocalCelestialId(id); // Also update the local celestial ID
  };

  // const handleCelestialChange = (id) => {
  //   setCelestialId(id); // Update local storage
  //   setLocalCelestialId(id); // Update state to trigger re-render
  // };

  const handleEngage = (destinationId) => {
    console.log(`Engaging to ${destinationId}`);
    setCelestialId(destinationId); // Update local storage
    setLocalCelestialId(destinationId); // Update local state
    // Assuming `name` is still relevant after engagement
    //setDestination({ id: destinationId, name: destination.name });
  };

  return (
    <Layout>
      {/* Content specific to the ShipYardPage */}
      <h2>Navigation</h2>
      <div>
            <DraggableWindow name="Star Chart" userId={userId}>
                <img src="/shuttles/images/placeholders/starchart.png" alt="Star Chart" height = "300" width ="300"/> 
            </DraggableWindow>
            <DraggableWindow name="Local Scanner" userId={userId}>
                <SystemOverview 
                  celestialId={celestialId}
                  onCelestialChange={handleCelestialChange} />
            </DraggableWindow>
            <DraggableWindow name="Navigation" userId={userId}>
                <NavigationControls 
                  destination={destination}
                  setDestination={setDestination}
                  onEngage={handleEngage} 
                />
                <CelestialNavigator 
                  celestialId={celestialId}
                  onCelestialChange={(id, name) => handleCelestialChange(id, name)}
                />
            </DraggableWindow>
            <DraggableWindow name="Viewport" userId={userId}>
               <Viewport celestialId={celestialId} />
           </DraggableWindow> 
        </div>
    </Layout>
  );
};

export default NavigationPage;
