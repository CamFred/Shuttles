import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ShipYardPage from './pages/ShipYardPage'; 
import NavigationPage from './pages/NavigationPage'; 

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/shipyard" element={<ShipYardPage />} />
          <Route path="/navigation" element={<NavigationPage />} />

          {/* Add other routes as needed */}
        </Routes>
    </Router>
  );
};

export default App;
