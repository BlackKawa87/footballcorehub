import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardJogador from './components/DashboardJogador';
import PainelAdmin from './components/PainelAdmin';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardJogador />} />
      <Route path="/admin" element={<PainelAdmin />} />
    </Routes>
  </BrowserRouter>
);

export default App;
