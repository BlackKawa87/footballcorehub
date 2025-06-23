import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white font-inter">
      <header className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
        <h1 className="text-2xl font-bold">FootballCoreHub</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/login" className="hover:text-blue-400">Login</Link>
          <Link to="/cadastro" className="hover:text-blue-400">Cadastro</Link>
        </nav>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore o Futebol de um Jeito Novo</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl">
          Plataforma para análise individual de atletas e networking no futebol.
        </p>
        <Link to="/cadastro" className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-700 transition">
          Começar Agora
        </Link>
      </main>
      <footer className="py-6 border-t border-gray-800 text-center space-y-2">
        <div className="space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Instagram</a>
        </div>
        <p className="text-sm text-gray-400">© 2024 FootballCoreHub</p>
      </footer>
    </div>
  );
};

export default Home;
