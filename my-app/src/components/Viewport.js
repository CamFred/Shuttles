import React, { useState, useEffect } from "react";
import { getCelestialInfo } from "../services/galaxyMap";
import "../css/Viewport.css";

const Viewport = ({ celestialId }) => {
  const [baseImageUrl, setBaseImageUrl] = useState(
    "/shuttles/images/viewports/stars.png"
  ); // Default image URL
  const overlayImageUrl = "/shuttles/images/viewports/viewport-transparent.png"; // Overlay image URL with transparency

  useEffect(() => {
    const celestialInfo = getCelestialInfo(celestialId);
    if (celestialInfo) {
      switch (celestialInfo.type) {
        case "warp gate":
          setBaseImageUrl("/shuttles/images/viewports/warpgate.png");
          break;
        case "planet":
          setBaseImageUrl("/shuttles/images/viewports/planet.png");
          break;
        case "space station":
          setBaseImageUrl("/shuttles/images/viewports/spacestation.png");
          break;
        case "asteroid belt":
          setBaseImageUrl("/shuttles/images/viewports/asteroidbelt.png");
          break;
        default:
          setBaseImageUrl("/shuttles/images/viewports/stars.png");
      }
    }
  }, [celestialId]);

  return (
    <div className="viewport-container">
      <img src={baseImageUrl} alt="Base" className="base-image" />
      <img src={overlayImageUrl} alt="Overlay" className="overlay-image" />
    </div>
  );
};

export default Viewport;
