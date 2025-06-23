import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white font-inter">
        <Header />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
