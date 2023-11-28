import React, { useState } from 'react';
import Layout from '../components/Layout';
import DraggableWindow from '../components/DraggableWindow';
import SystemOverview from '../components/SystemOverview';  
import CelestialNavigator from '../components/CelestialNavigator';
import { getUserId, getCelestialId, setCelestialId } from '../services/user';

const NavigationPage = () => {
  const userId = getUserId();
  const [celestialId, setLocalCelestialId] = useState(getCelestialId());

  const handleCelestialChange = (id) => {
    setCelestialId(id); // Update local storage
    setLocalCelestialId(id); // Update state to trigger re-render
  };

  return (
    <Layout>
      {/* Content specific to the ShipYardPage */}
      <h2>Navigation</h2>
      <div>
            <DraggableWindow name="Star Chart" userId={userId}>
                <img src="/shuttles/images/placeholders/starchart.png" alt="Star Chart" height = "300" width ="300"/> 
            </DraggableWindow>
            <DraggableWindow name="Current Location" userId={userId}>
                <SystemOverview 
                  celestialId={celestialId}
                  onCelestialChange={handleCelestialChange} />
            </DraggableWindow>
            <DraggableWindow name="Navigation" userId={userId}>
             <CelestialNavigator 
                celestialId={celestialId}
                onCelestialChange={handleCelestialChange}/>
            </DraggableWindow>
            <DraggableWindow name="Viewport" userId={userId}>
               <img src="/shuttles/images/placeholders/viewport.png" alt="Viewport" height = "300" width ="300"/>
           </DraggableWindow> 

        </div>
    </Layout>
  );
};

export default NavigationPage;
