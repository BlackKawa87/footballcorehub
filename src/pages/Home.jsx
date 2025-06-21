import React from 'react';

const Navigation = () => (
  <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
    <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
      <div className="text-xl font-bold text-gray-900">FootballCoreHub</div>
      <div className="hidden md:flex space-x-8">
        <a href="#features" className="text-gray-600 hover:text-blue-600">Features</a>
        <a href="#cta" className="text-gray-600 hover:text-blue-600">Get Started</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-6 text-center">
    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
      Manage Your Team with <span className="text-blue-600">Confidence</span>
    </h1>
    <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
      A modern platform built for clubs, agents and players to track performance and streamline transfers.
    </p>
    <a href="#cta" className="inline-block bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium px-8 py-4 rounded-lg">
      Get Started
    </a>
  </section>
);

const Features = () => (
  <section id="features" className="py-20 px-6 bg-white">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Powerful Features</h2>
      <p className="text-xl text-gray-600 mb-12">Tools that help you focus on what matters.</p>
      <div className="grid md:grid-cols-3 gap-8 text-left">
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Player Analytics</h3>
          <p className="text-gray-600">Track detailed stats and progress for every athlete.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Transfer Tools</h3>
          <p className="text-gray-600">Manage negotiations and contracts from a single dashboard.</p>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
          <p className="text-gray-600">Connect clubs, players and agents with secure messaging.</p>
        </div>
      </div>
    </div>
  </section>
);

const CallToAction = () => (
  <section id="cta" className="py-20 px-6 bg-blue-600 text-white text-center">
    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Join?</h2>
    <p className="text-xl mb-8">Start your free trial and experience FootballCoreHub today.</p>
    <a href="/cadastro" className="inline-block bg-white text-blue-600 font-medium px-8 py-4 rounded-lg hover:bg-gray-100">
      Create your account
    </a>
  </section>
);

const Footer = () => (
  <footer className="py-8 bg-gray-100 text-center text-sm text-gray-500">
    &copy; {new Date().getFullYear()} FootballCoreHub. All rights reserved.
  </footer>
);

const Home = () => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navigation />
    <Hero />
    <Features />
    <CallToAction />
    <Footer />
  </div>
);

export default Home;
