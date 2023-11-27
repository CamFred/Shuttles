import React from 'react';
import Layout from '../components/Layout';
import DraggableWindow from '../components/DraggableWindow';
const HomePage = () => {
  return (
    <Layout>
      {/* Content specific to the home page */}
      <h2>Welcome to the About Page</h2>
      <p>This is the main content of the About Page.</p>
      <div>
            <DraggableWindow name="About Me">I'm just this guy, you know?</DraggableWindow>
            <DraggableWindow name="Window 2">Window 2 content here</DraggableWindow>
            <DraggableWindow name="Window 3">Window 3<br />content<br />here</DraggableWindow>
        </div>
    </Layout>
  );
};

export default HomePage;
