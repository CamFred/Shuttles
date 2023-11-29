import React, { useState } from "react";
import Layout from "../components/Layout";
import DraggableWindow from "../components/DraggableWindow";
import SystemOverview from "../components/navigation/SystemOverview";
import Viewport from "../components/navigation/Viewport";
import CelestialNavigator from "../components/navigation/CelestialNavigator";
import NavigationControls from "../components/navigation/NavigationControls";
import UserService from "../services/UserService";
import MockServer from "../mock/MockServer";
import StarChart from "../components/navigation/StarChart";

const NavigationPage = () => {
  const userId = UserService.getUserId();
  const [celestialId, setLocalCelestialId] = useState(
    UserService.getCelestialId()
  );
  const [destination, setDestination] = useState({ id: "", name: "" });
  const [travelStatus, setTravelStatus] = useState("");

  const handleCelestialChange = (id, name) => {
    setDestination({ id, name }); // Update the destination
  };

  // const handleEngage = (destinationId) => {
  //   MockServer.requestTravel(destinationId)
  //     .then(response => {
  //       // Update celestial ID based on the server's response
  //       UserService.setCelestialId(response.celestialId);
  //       setLocalCelestialId(response.celestialId);
  //       console.log(response.status); // Log the status
  //     })
  //     .catch(error => {
  //       console.error('Travel Error:', error);
  //     });
  // };

  const handleEngage = (destinationId) => {
    setTravelStatus("travelling");
    MockServer.requestTravel(destinationId)
      .then((response) => {
        UserService.setCelestialId(response.celestialId);
        setLocalCelestialId(response.celestialId);
        setTravelStatus("arrived");
      })
      .catch((error) => {
        console.error("Travel Error:", error);
        setTravelStatus("error");
      });
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
          "Local Scanner",
          <SystemOverview
            celestialId={celestialId}
            onCelestialChange={handleCelestialChange}
            isTraveling={travelStatus === "travelling"}
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
              destination={destination}
              isTraveling={travelStatus === "travelling"}
              onCelestialChange={handleCelestialChange}
            />
          </>
        )}
        {renderDraggableWindow(
          "Viewport",
          <Viewport 
          isTraveling={travelStatus === "travelling"}
          celestialId={celestialId} 
          />
        )}
          {renderDraggableWindow(
          "Star Chart",
          <StarChart 
          celestialId={celestialId} 
          />
        )}
      </div>
    </Layout>
  );
};

export default NavigationPage;
