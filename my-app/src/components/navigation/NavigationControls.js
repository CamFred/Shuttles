import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const NavigationControls = ({ destination, setDestination, onEngage }) => {
  const handleEngage = () => {
    onEngage(destination.id); // Engage using the ID
  };

  return (
    <Container>
      <row>
      <input
        class="form-control-sm"
        type="text"
        placeholder="Enter destination"
        value={destination.name} // Display the name
        onChange={(e) =>
          setDestination({ ...destination, name: e.target.value })
        }
        readOnly // Make it read-only if the input shouldn't be editable
      />
      <Button variant="primary" onClick={handleEngage} disabled={!destination.id}>
        Engage
      </Button>
      </row>
    </Container>
  );
};

export default NavigationControls;
