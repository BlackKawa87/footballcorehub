import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage.jsx';
import DashboardJogador from '../pages/DashboardJogador.jsx';
import DashboardClube from '../pages/DashboardClube.jsx';
import DashboardEmpresario from '../pages/DashboardEmpresario.jsx';
import PainelAdmin from '../pages/PainelAdmin.jsx';
import PaginaCadastro from '../pages/PaginaCadastro.jsx';
import PaginaCadastroAvancado from '../pages/PaginaCadastroAvancado.jsx';
import PaginaScout from '../pages/PaginaScout.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/dashboard-jogador" element={<DashboardJogador />} />
    <Route path="/dashboard-clube" element={<DashboardClube />} />
    <Route path="/dashboard-empresario" element={<DashboardEmpresario />} />
    <Route path="/admin" element={<PainelAdmin />} />
    <Route path="/cadastro" element={<PaginaCadastro />} />
    <Route path="/cadastroavancado" element={<PaginaCadastroAvancado />} />
    <Route path="/scout" element={<PaginaScout />} />
  </Routes>
);

export default AppRoutes;
