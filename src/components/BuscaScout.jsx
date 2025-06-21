import React, { useEffect, useState } from 'react';

const BuscaScout = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadMatches = async () => {
      try {
        const response = await fetch('/api/matches');
        if (!response.ok) throw new Error('Erro ao buscar dados');
        const data = await response.json();
        setMatches(data.matches || []);
      } catch (err) {
        setError('Falha ao carregar partidas');
      } finally {
        setLoading(false);
      }
    };

    loadMatches();
  }, []);

  if (loading) return <p className="text-center">Carregando...</p>;
  if (error) return <p className="text-center text-red-600">{error}</p>;

  return (
    <div className="space-y-2">
      {matches.map((match, idx) => (
        <div key={idx} className="p-4 bg-gray-100 rounded">
          <p className="font-semibold">
            {match.teams?.home?.name} x {match.teams?.away?.name}
          </p>
          <p className="text-sm text-gray-500">{match.fixture?.date || ''}</p>
        </div>
      ))}
    </div>
  );
};

export default BuscaScout;
