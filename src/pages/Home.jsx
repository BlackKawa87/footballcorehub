import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-6">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-white">FootballCoreHub</h1>
        <p className="text-gray-400 text-lg">Escolha seu perfil para acessar a plataforma:</p>
        <div className="space-y-3">
          <Link to="/player" className="block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition duration-300">Entrar como Jogador</Link>
          <Link to="/club" className="block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition duration-300">Entrar como Clube</Link>
          <Link to="/agent" className="block bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg transition duration-300">Entrar como Empresário</Link>
        </div>
      </div>
    </div>
  );
}
