import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">FootballCoreHub</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <a href="/jogador" className="bg-blue-600 hover:bg-blue-700 rounded-2xl p-6 shadow-md text-center transition">
          <h2 className="text-2xl font-semibold mb-2">Sou Jogador</h2>
          <p className="text-sm text-blue-100">Criar perfil, gerar análises e evoluir com IA</p>
        </a>

        <a href="/scout" className="bg-green-600 hover:bg-green-700 rounded-2xl p-6 shadow-md text-center transition">
          <h2 className="text-2xl font-semibold mb-2">Sou Scout</h2>
          <p className="text-sm text-green-100">Encontrar atletas por estilo de jogo e perfil</p>
        </a>

        <a href="/empresario" className="bg-yellow-500 hover:bg-yellow-600 rounded-2xl p-6 shadow-md text-center transition">
          <h2 className="text-2xl font-semibold mb-2">Sou Empresário</h2>
          <p className="text-sm text-yellow-100">Oferecer atletas com inteligência de mercado</p>
        </a>

        <a href="/clubes" className="bg-red-600 hover:bg-red-700 rounded-2xl p-6 shadow-md text-center transition">
          <h2 className="text-2xl font-semibold mb-2">Sou Clube</h2>
          <p className="text-sm text-red-100">Gerenciar elenco, gerar relatórios e contratar</p>
        </a>
      </div>
    </div>
  );
};

export default Home;
