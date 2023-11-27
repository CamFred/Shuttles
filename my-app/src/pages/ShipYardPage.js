import React from 'react';
import Layout from '../components/Layout';
import DraggableWindow from '../components/DraggableWindow';
import Inventory from '../components/Inventory';
const ShipYardPage = () => {
  return (
    <Layout>
      {/* Content specific to the ShipYardPage */}
      <h2>Shipyard</h2>
      <div>
            <DraggableWindow name="Inventory">
                <Inventory/>
                test.
            </DraggableWindow>
            <DraggableWindow name="Ship Module Bays">Window 2 content here</DraggableWindow>
            <DraggableWindow name="Module Stats">Window 3<br />content<br />here</DraggableWindow>
        </div>
    </Layout>
  );
};

export default ShipYardPage;
