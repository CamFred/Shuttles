import React from "react";
import { getCelestialInfo } from "../../services/galaxyMap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const SystemOverview = ({ celestialId, onCelestialChange, isTraveling }) => {
  const celestialInfo = getCelestialInfo(celestialId);

  const handleWarpGateClick = (connectingGateId) => {
    const connectingGateInfo = getCelestialInfo(connectingGateId);
    if (connectingGateInfo) {
      onCelestialChange(connectingGateId, connectingGateInfo.name); // Pass ID and name
    }
  };

  // Conditional rendering based on travel status
  if (isTraveling) {
    return <div className="system-overview-offline">OFFLINE IN WARP</div>;
  }

  // return (
  //   <div>
  //     {celestialInfo ? (
  //       <div>
  //         <Card style={{ width: "18rem" }}>
  //           <Card.Body>
  //             <Card.Title>{celestialInfo.name}</Card.Title>
  //             <Card.Subtitle className="mb-2 text-muted">
  //               {celestialInfo.type}
  //             </Card.Subtitle>
  //             <Card.Text>{celestialInfo.description}</Card.Text>

  //             <ListGroup className="primary">
  //               {celestialInfo.facilities.map((facility, index) =>
  //                 facility === "warp gate" ? (
  //                   <ListGroup.Item key={index} className="light-bg-subtle">
  //                     <a
  //                       href="#"
  //                       onClick={() =>
  //                         handleWarpGateClick(celestialInfo.connectingGateId)
  //                       }
  //                     >
  //                       {facility}
  //                     </a>
  //                   </ListGroup.Item>
  //                 ) : (
  //                   <ListGroup.Item key={index} className="light-bg-subtle">{facility}</ListGroup.Item>
  //                 )
  //               )}

  //             </ListGroup>
  //           </Card.Body>
  //         </Card>
  //       </div>
  //     ) : (
  //       <p>No information available for this celestial ID.</p>
  //     )}
  //   </div>
  // );

  return (
    <div>
      {celestialInfo ? (
        <div>
          <h2>{celestialInfo.name}</h2>
          <h4 className="text-primary-emphasis">{celestialInfo.type}</h4>
          <p>{celestialInfo.description}</p>

          {celestialInfo.facilities && (
            <ListGroup className="primary">
              {celestialInfo.facilities.map((facility, index) =>
                facility === "warp gate" ? (
                  <ListGroup.Item key={index} className="light-bg-subtle">
                    <a
                      href="#"
                      onClick={() =>
                        handleWarpGateClick(celestialInfo.connectingGateId)
                      }
                    >
                      {facility}
                    </a>
                  </ListGroup.Item>
                ) : (
                  <ListGroup.Item key={index} className="light-bg-subtle">
                    {facility}
                  </ListGroup.Item>
                )
              )}
            </ListGroup>
          )}
        </div>
      ) : (
        <p>No information available for this celestial ID.</p>
      )}
    </div>
  );
};

export default SystemOverview;
