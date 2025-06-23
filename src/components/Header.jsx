import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="p-4 bg-gray-800 flex justify-between items-center">
    <Link to="/" className="text-xl font-bold text-white">FootballCoreHub</Link>
    <nav className="space-x-4 text-white">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/about" className="hover:underline">Sobre</Link>
      <Link to="/cadastro" className="hover:underline">Cadastro</Link>
      <Link to="/dashboard" className="hover:underline">Dashboard</Link>
    </nav>
  </header>
);

export default Header;
