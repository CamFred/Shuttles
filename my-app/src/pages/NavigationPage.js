import React, { useState } from "react";
import Layout from "../components/Layout";
import DraggableWindow from "../components/DraggableWindow";
import SystemOverview from "../components/navigation/SystemOverview";
import Viewport from "../components/Viewport";
import CelestialNavigator from "../components/navigation/CelestialNavigator";
import NavigationControls from "../components/navigation/NavigationControls";
import { getUserId, getCelestialId, setCelestialId } from "../services/user";

const NavigationPage = () => {
  const userId = getUserId();
  const [celestialId, setLocalCelestialId] = useState(getCelestialId());
  const [destination, setDestination] = useState({ id: "", name: "" });

  const handleCelestialChange = (id, name) => {
    setDestination({ id, name }); // Update the destination
  };

  const handleEngage = (destinationId) => {
    setCelestialId(destinationId);
    setLocalCelestialId(destinationId);
  };

  const renderDraggableWindow = (name, component) => (
    <DraggableWindow name={name} userId={userId}>
      {component}
    </DraggableWindow>
  );

  return (
    <Layout>
      <div>
        {renderDraggableWindow(
          "Star Chart",
          <img
            src="/shuttles/images/placeholders/starchart.png"
            alt="Star Chart"
            height="300"
            width="300"
          />
        )}
        {renderDraggableWindow(
          "Local Scanner",
          <SystemOverview
            celestialId={celestialId}
            onCelestialChange={handleCelestialChange}
          />
        )}
        {renderDraggableWindow(
          "Navigation",
          <>
            <NavigationControls
              destination={destination}
              setDestination={setDestination}
              onEngage={handleEngage}
            />
            <CelestialNavigator
              celestialId={celestialId}
              onCelestialChange={handleCelestialChange}
            />
          </>
        )}
        {renderDraggableWindow(
          "Viewport",
          <Viewport celestialId={celestialId} />
        )}
      </div>
    </Layout>
  );
};

export default NavigationPage;
