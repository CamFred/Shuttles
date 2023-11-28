import React from "react";
import { getCelestialInfo } from "../../services/galaxyMap";

const SystemOverview = ({ celestialId, onCelestialChange }) => {
  const celestialInfo = getCelestialInfo(celestialId);

  const handleWarpGateClick = (connectingGateId) => {
    const connectingGateInfo = getCelestialInfo(connectingGateId);
    if (connectingGateInfo) {
      onCelestialChange(connectingGateId, connectingGateInfo.name); // Pass ID and name
    }
  };

  return (
    <div>
      {celestialInfo ? (
        <div>
          <h2>{celestialInfo.name}</h2>
          <p>Type: {celestialInfo.type}</p>
          <p>{celestialInfo.description}</p>

          {celestialInfo.facilities && celestialInfo.facilities.length > 0 && (
            <div>
              <h3>Facilities</h3>
              <ul>
                {celestialInfo.facilities.map((facility, index) =>
                  facility === "warp gate" ? (
                    <li key={index}>
                      <a
                        href="#"
                        onClick={() =>
                          handleWarpGateClick(celestialInfo.connectingGateId)
                        }
                      >
                        {facility}
                      </a>
                    </li>
                  ) : (
                    <li key={index}>{facility}</li>
                  )
                )}
              </ul>
            </div>
          )}
        </div>
      ) : (
        <p>No information available for this celestial ID.</p>
      )}
    </div>
  );
};

export default SystemOverview;
