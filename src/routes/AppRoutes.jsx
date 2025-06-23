import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import DashboardJogador from '../pages/DashboardJogador.jsx';
import DashboardClube from '../pages/DashboardClube.jsx';
import DashboardEmpresario from '../pages/DashboardEmpresario.jsx';
import PainelAdmin from '../pages/PainelAdmin.jsx';
import PaginaCadastro from '../pages/PaginaCadastro.jsx';
import PaginaCadastroAvancado from '../pages/PaginaCadastroAvancado.jsx';
import ScoutPage from '../pages/ScoutPage.jsx';
import TransferLab from '../components/TransferLab.jsx';
import PlayerStatistics from '../pages/PlayerStatistics.jsx';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dashboard-jogador" element={<DashboardJogador />} />
    <Route path="/dashboard-clube" element={<DashboardClube />} />
    <Route path="/dashboard-empresario" element={<DashboardEmpresario />} />
    <Route path="/admin" element={<PainelAdmin />} />
    <Route path="/cadastro" element={<PaginaCadastro />} />
    <Route path="/cadastroavancado" element={<PaginaCadastroAvancado />} />
    <Route path="/scout" element={<ScoutPage />} />
    <Route path="/player-stats" element={<PlayerStatistics />} />
    <Route path="/transferlab" element={<TransferLab />} />
  </Routes>
);

export default AppRoutes;
