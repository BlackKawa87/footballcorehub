// src/pages/Home.jsx
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white px-4">
      <h1 className="text-4xl font-bold mb-4">FootballCoreHub</h1>
      <p style={{ color: 'green', fontWeight: 'bold', marginTop: '20px' }}>
        ✅ Plataforma FootballCoreHub V2 publicada com sucesso!
      </p>
      <p style={{ color: 'green', fontWeight: 'bold' }}>🧠 Plataforma conectada com sucesso ao GitHub!</p>
      <p className="text-lg mb-8 text-center max-w-xl">
        Bem-vindo à nova era da análise individual de jogadores
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl">
        <Link to="/player" className="bg-blue-600 hover:bg-blue-700 p-6 rounded-lg shadow text-center rounded">
          Entrar como Jogador
        </Link>
        <Link to="/club" className="bg-green-600 hover:bg-green-700 p-6 rounded-lg shadow text-center rounded">
          Entrar como Clube
        </Link>
        <Link to="/agent" className="bg-yellow-500 hover:bg-yellow-600 p-6 rounded-lg shadow text-center rounded">
          Entrar como Empresário
        </Link>
      </div>
    </div>
  );
}
