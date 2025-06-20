import React, { useState } from 'react';

const PaginaCadastroAvancado = () => {
  const [form, setForm] = useState({
    posicaoPrincipal: '',
    posicoesExtras: '',
    pontosFortes: '',
    pontosFracos: '',
    clubeAtual: '',
    altura: '',
    peso: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Enviando...');

    try {
      const response = await fetch('https://hook.eu2.make.com/SEU_WEBHOOK_AVANCADO', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('Dados enviados com sucesso!');
        setForm({
          posicaoPrincipal: '',
          posicoesExtras: '',
          pontosFortes: '',
          pontosFracos: '',
          clubeAtual: '',
          altura: '',
          peso: '',
        });
      } else {
        setStatus('Erro ao enviar os dados.');
      }
    } catch (error) {
      setStatus('Erro de conexão.');
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Dados Opcionais</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="posicaoPrincipal" placeholder="Posição Principal" value={form.posicaoPrincipal} onChange={handleChange} className="w-full p-2 rounded" required />
        <input type="text" name="posicoesExtras" placeholder="Posições Extras" value={form.posicoesExtras} onChange={handleChange} className="w-full p-2 rounded" />
        <input type="text" name="pontosFortes" placeholder="Pontos Fortes" value={form.pontosFortes} onChange={handleChange} className="w-full p-2 rounded" />
        <input type="text" name="pontosFracos" placeholder="Pontos Fracos" value={form.pontosFracos} onChange={handleChange} className="w-full p-2 rounded" />
        <input type="text" name="clubeAtual" placeholder="Clube Atual" value={form.clubeAtual} onChange={handleChange} className="w-full p-2 rounded" />
        <input type="text" name="altura" placeholder="Altura (cm)" value={form.altura} onChange={handleChange} className="w-full p-2 rounded" />
        <input type="text" name="peso" placeholder="Peso (kg)" value={form.peso} onChange={handleChange} className="w-full p-2 rounded" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Enviar</button>
      </form>
      {status && <p className="text-center mt-4">{status}</p>}
    </div>
  );
};

export default PaginaCadastroAvancado;
