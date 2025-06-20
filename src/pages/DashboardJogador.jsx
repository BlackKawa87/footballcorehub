import React, { useEffect, useState } from 'react';

const DashboardJogador = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetch('/api/matches')
      .then((res) => res.json())
      .then((data) => setMatches(data.matches || []))
      .catch(() => setMatches([]));
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl mb-4">Próximos Jogos</h2>
      <ul className="space-y-1">
        {matches.map((m, idx) => (
          <li key={idx}>{m.team1} x {m.team2} ({m.date})</li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardJogador;
