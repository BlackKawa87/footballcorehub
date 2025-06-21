import React from 'react';
import BuscaScout from '@/components/BuscaScout';

export default function ScoutPage() {
  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold text-center mb-4">Painel do Scout</h1>
      <BuscaScout />
    </main>
  );
}
