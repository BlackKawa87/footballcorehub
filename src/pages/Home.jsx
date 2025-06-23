import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-inter">
      {/* Header */}
      <header className="w-full px-6 py-4 border-b border-gray-700 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">FootballCoreHub</h1>
        <nav className="space-x-4">
          <Link to="/player" className="hover:text-blue-400 transition">Player</Link>
          <Link to="/club" className="hover:text-blue-400 transition">Club</Link>
          <Link to="/agent" className="hover:text-blue-400 transition">Agent</Link>
          <Link to="/stats" className="hover:text-blue-400 transition">Statistics</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Sua Plataforma de Análise Individual Inteligente</h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
          Potencialize sua performance com relatórios personalizados, análises táticas por IA e recomendações exclusivas para o seu estilo de jogo.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/player"
            className="px-6 py-3 bg-blue-600 rounded-md hover:bg-blue-700 transition"
          >
            Sou Jogador
          </Link>
          <Link
            to="/club"
            className="px-6 py-3 bg-green-600 rounded-md hover:bg-green-700 transition"
          >
            Sou Clube
          </Link>
          <Link
            to="/agent"
            className="px-6 py-3 bg-yellow-500 rounded-md hover:bg-yellow-600 transition"
          >
            Sou Empresário
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
