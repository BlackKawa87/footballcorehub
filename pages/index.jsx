import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">FootballCoreHub</h1>

      <div className="flex flex-col gap-3">
        <Link href="/player" className="text-blue-600 hover:underline text-lg">
          Entrar como Jogador
        </Link>
        <Link href="/club" className="text-blue-600 hover:underline text-lg">
          Entrar como Clube
        </Link>
        <Link href="/agent" className="text-blue-600 hover:underline text-lg">
          Entrar como Empresário
        </Link>
        <Link href="/scout" className="text-blue-600 hover:underline text-lg">
          Entrar como Scout
        </Link>
      </div>
    </div>
  );
}
