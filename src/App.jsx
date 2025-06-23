import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Player from './pages/Player';
import Club from './pages/Club';
import Agent from './pages/Agent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/player" element={<Player />} />
      <Route path="/club" element={<Club />} />
      <Route path="/agent" element={<Agent />} />
    </Routes>
  );
}

export default App;
