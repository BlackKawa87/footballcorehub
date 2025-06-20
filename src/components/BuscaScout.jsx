import { useState } from 'react';
import axios from 'axios';

const BuscaScout = () => {
  const [nome, setNome] = useState('');
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState('');

  const buscarJogador = async () => {
    setErro('');
    setDados(null);
    try {
      const resposta = await axios.get(
        `https://api-football-v1.p.rapidapi.com/v3/players?search=${nome}&season=2024`,
        {
          headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_API_FOOTBALL_KEY,
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
          },
        },
      );

      const jogador = resposta.data.response[0];
      if (!jogador) {
        setErro('Jogador não encontrado.');
        return;
      }

      const info = jogador.player;
      const time = jogador.statistics[0].team.name;
      const posicao = jogador.statistics[0].games.position;

      setDados({
        nome: info.name,
        nascimento: info.birth.date,
        idade: info.age,
        nacionalidade: info.nationality,
        clube: time,
        posicao,
      });
    } catch (err) {
      console.error(err);
      setErro('Erro na busca. Tente novamente.');
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">🔍 Buscar Jogador</h2>
      <input
        type="text"
        placeholder="Digite o nome do jogador"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="border border-gray-300 p-2 rounded w-full mb-2"
      />
      <button
        onClick={buscarJogador}
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
      >
        Buscar
      </button>

      {erro && <p className="text-red-500 mt-2">{erro}</p>}

      {dados && (
        <div className="mt-4 border-t pt-2">
          <p><strong>Nome:</strong> {dados.nome}</p>
          <p><strong>Data de nascimento:</strong> {dados.nascimento}</p>
          <p><strong>Idade:</strong> {dados.idade}</p>
          <p><strong>Clube atual:</strong> {dados.clube}</p>
          <p><strong>Posição:</strong> {dados.posicao}</p>
          <p><strong>Nacionalidade:</strong> {dados.nacionalidade}</p>
        </div>
      )}
    </div>
  );
};

export default BuscaScout;
