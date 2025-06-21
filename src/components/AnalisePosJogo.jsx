import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const AnalisePosJogo = () => {
  const dadosSimulados = {
    acoesOfensivas: 15,
    passesCertos: 42,
    finalizacoes: 5,
    errosCriticos: 2,
    notaPartida: 7.8,
  };

  const radarData = {
    labels: [
      'Visão de Jogo',
      'Intensidade',
      'Efetividade Ofensiva',
      'Reação Defensiva',
      'Participação Tática',
    ],
    datasets: [
      {
        label: 'Avaliação',
        data: [80, 70, 75, 65, 85],
        backgroundColor: 'rgba(59,130,246,0.2)',
        borderColor: 'rgba(59,130,246,1)',
        borderWidth: 1,
      },
    ],
  };

  const radarOptions = {
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-xl">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        Análise Pós-Jogo: Desempenho Individual
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-md text-center">
          <p className="text-sm text-gray-500">Ações Ofensivas</p>
          <p className="text-xl font-bold">{dadosSimulados.acoesOfensivas}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md text-center">
          <p className="text-sm text-gray-500">Passes Certos</p>
          <p className="text-xl font-bold">{dadosSimulados.passesCertos}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md text-center">
          <p className="text-sm text-gray-500">Finalizações</p>
          <p className="text-xl font-bold">{dadosSimulados.finalizacoes}</p>
        </div>
        <div className="bg-gray-50 p-4 rounded-md text-center">
          <p className="text-sm text-gray-500">Erros Críticos</p>
          <p className="text-xl font-bold">{dadosSimulados.errosCriticos}</p>
        </div>
      </div>

      <div className="mb-6">
        <Radar data={radarData} options={radarOptions} />
      </div>

      <div className="text-center mb-6">
        <p className="text-gray-500 text-sm">Nota da Partida (IA)</p>
        <p className="text-3xl font-bold text-blue-600">
          {dadosSimulados.notaPartida}
        </p>
      </div>

      <div className="text-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
          Solicitar Recomendações de Treino
        </button>
      </div>
    </div>
  );
};

export default AnalisePosJogo;
