import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import DashboardJogador from '../pages/DashboardJogador.jsx';
import DashboardClube from '../pages/DashboardClube.jsx';
import DashboardEmpresario from '../pages/DashboardEmpresario.jsx';
import PainelAdmin from '../pages/PainelAdmin.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/dashboard-jogador" element={<DashboardJogador />} />
    <Route path="/dashboard-clube" element={<DashboardClube />} />
    <Route path="/dashboard-empresario" element={<DashboardEmpresario />} />
    <Route path="/admin" element={<PainelAdmin />} />
  </Routes>
);

export default AppRoutes;
