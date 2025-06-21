import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-900 text-white">
    <h1 className="text-4xl font-bold mb-8">FootballCoreHub</h1>
    <div className="space-y-4 w-full max-w-xs">
      <Link to="/dashboard-jogador" className="block w-full py-3 rounded-2xl shadow bg-gray-800 hover:bg-gray-700 text-center">Enter as Player</Link>
      <Link to="/dashboard-clube" className="block w-full py-3 rounded-2xl shadow bg-gray-800 hover:bg-gray-700 text-center">Enter as Club</Link>
      <Link to="/dashboard-empresario" className="block w-full py-3 rounded-2xl shadow bg-gray-800 hover:bg-gray-700 text-center">Enter as Agent</Link>
      <Link to="/player-stats" className="block w-full py-3 rounded-2xl shadow bg-gray-800 hover:bg-gray-700 text-center">Player Statistics</Link>
    </div>
  </div>
);

export default HomePage;
