import React from 'react';
import Layout from '../components/Layout';
import DraggableWindow from '../components/DraggableWindow';
import { getUserId } from '../services/user';
const HomePage = () => {

  const userId = getUserId();

  return (
    <Layout>
      {/* Content specific to the about page */}
      <h2>Welcome to the About Page</h2>
      <p>This is the main content of the About Page.</p>
      <div>
        <DraggableWindow name="Galaxy Map" userId={userId}>
        <h1>Navigation Map Configuration</h1>
    <h2>Structure and Composition</h2>
    <h3>Star Systems</h3>
    <ul>
        <li>Each star system is a distinct entity within the galaxy.</li>
        <li>Systems have unique identifiers and names.</li>
        <li>Positioned using a 3D Cartesian coordinate system with the galaxy's center as the origin (0, 0, 0).</li>
        <li>Coordinates are measured in Astronomical Units (AU), providing a realistic scale.</li>
    </ul>

    <h3>Celestial Destinations</h3>
    <ul>
        <li>Within each star system, there are various celestial destinations like planets, moons, asteroids, and space stations.</li>
        <li>Each destination has its coordinates, offering precise locations relative to its parent star system.</li>
        <li>Descriptive attributes for each destination include type, name, resources, dangers, and available facilities.</li>
    </ul>

    <h2>Navigation Features</h2>
    <h3>Distance Calculation</h3>
    <ul>
        <li>Distances between celestial bodies are calculated using the Euclidean distance formula.</li>
        <li>This feature aids in travel planning and fuel management.</li>
    </ul>

    <h3>Nearest Stars</h3>
    <ul>
        <li>Each star system entry includes a list of the nearest star systems, enhancing navigational ease.</li>
        <li>Distances to these nearest stars are pre-calculated and stored, allowing for quick access and reducing in-game computational load.</li>
    </ul>

    <h3>Dynamic Content</h3>
    <ul>
        <li>While the star positions are static, the celestial destinations within them can have dynamic attributes, such as varying resources or changing conditions.</li>
    </ul>

    <h2>Data Representation</h2>
    <ul>
        <li>The galaxy and its components are represented in a JSON format, making it easy to parse and use within the game's programming framework.</li>
        <li>This format allows for scalability, easy updates, and integration with game mechanics.</li>
    </ul>

    <h2>Gameplay Integration</h2>
    <ul>
        <li>Players use the navigation map to plot courses, explore new destinations, and strategize their movements based on resources, distances, and potential dangers.</li>
        <li>The map serves as a crucial tool for decision-making, exploration, and interaction within the game universe.</li>
    </ul>

        </DraggableWindow>
        <DraggableWindow name="Overview" userId={userId}>
    
Type: Multiplayer online game, accessible through a web browser.
Setting: A vast universe where all players coexist.
Main Gameplay:
Construction: Players design and build spaceships.
Exploration: Navigating between stars, planets, and spaceports.
Resource Management: Involves mining, buying, selling items, and refining ships.
Celestial Destinations: Key locations include planets, asteroid fields, starports, and stars (e.g., for charging solar arrays).
Technical Framework
Development Platform: Utilizing a React framework.
Current Data Handling:
Placeholder Data: Static JSON files are being used temporarily.
Functionality: JavaScript functions currently return static data, but are intended to later interface with a database.
Scale and Scope
Universe Size: Envisioned to contain thousands, possibly tens of thousands, of visitable star systems.
Terminology
Points of Interest: Referred to as "Celestial Destinations," encompassing various significant locations in space.
        </DraggableWindow>
        <DraggableWindow name="Window 3" userId={userId}>Design<br />
          <ol>
            <li><a href="https://golden-layout.com/tutorials/dynamically-adding-components.html">Golden-Layout</a> - Nice alternative for the windowing.</li>
          </ol>
        </DraggableWindow>
      </div>
    </Layout>
  );
};

export default HomePage;
