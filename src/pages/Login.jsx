import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white font-inter px-4">
      <form className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <input type="email" placeholder="E-mail" className="w-full p-2 rounded text-gray-900" />
        <input type="password" placeholder="Senha" className="w-full p-2 rounded text-gray-900" />
        <button type="submit" className="w-full py-2 bg-blue-600 rounded hover:bg-blue-700 transition">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
