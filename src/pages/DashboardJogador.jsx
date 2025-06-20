import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardJogador = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        Painel do Jogador
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Escolha o que deseja fazer:
      </p>

      <div className="grid gap-4 w-full max-w-md">
        <button
          onClick={() => navigate('/perfilinteligente')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl"
        >
          Gerar Perfil Completo com IA
        </button>

        <button
          onClick={() => navigate('/analise-pre-jogo')}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl"
        >
          Gerar Análise Pré-Jogo
        </button>

        <button
          onClick={() => navigate('/analise-pos-jogo')}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-xl"
        >
          Gerar Análise Pós-Jogo
        </button>
      </div>
    </div>
  );
};

export default DashboardJogador;
