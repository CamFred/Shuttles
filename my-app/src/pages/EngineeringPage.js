import React from 'react';
import Layout from '../components/Layout';
import DraggableWindow from '../components/DraggableWindow';
import Inventory from '../components/Inventory';
import { getUserId } from '../services/user';

const EngineeringPage = () => {
    const userId = getUserId();

  return (

    <Layout>
        <div>
    <DraggableWindow name="Shipyard">
        <Inventory/>
    </DraggableWindow>
    </div>
    </Layout>
  );
};

export default EngineeringPage;
