import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ShipYardPage from "./pages/ShipYardPage";
import NavigationPage from "./pages/NavigationPage";
import EngineeringPage from "./pages/EngineeringPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shipyard" element={<ShipYardPage />} />
        <Route path="/navigation" element={<NavigationPage />} />
        <Route path="/engineering" element={<EngineeringPage />} />

        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
