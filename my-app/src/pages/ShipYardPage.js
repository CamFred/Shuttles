import React from "react";
import Layout from "../components/Layout";
import DraggableWindow from "../components/DraggableWindow";
import Inventory from "../components/Inventory";
import UserService from '../services/UserService';

const ShipYardPage = () => {
  const userId = UserService.getUserId();

  return (
    <Layout>
      <div>
        <DraggableWindow name="Shipyard">
          <Inventory />
        </DraggableWindow>

        <DraggableWindow name="Ship Module Bays" userId={userId}>
          Window 2 content here
        </DraggableWindow>
        <DraggableWindow name="Module Stats" userId={userId}>
          Window 3<br />
          content
          <br />
          here
        </DraggableWindow>
      </div>
    </Layout>
  );
};

export default ShipYardPage;
