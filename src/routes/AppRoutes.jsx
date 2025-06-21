import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
// Aqui você pode importar as outras páginas conforme forem sendo criadas
// import JogadorDashboard from '../pages/JogadorDashboard';
// import ScoutDashboard from '../pages/ScoutDashboard';
// import EmpresarioDashboard from '../pages/EmpresarioDashboard';
// import ClubesDashboard from '../pages/ClubesDashboard';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/jogador" element={<JogadorDashboard />} />
        <Route path="/scout" element={<ScoutDashboard />} />
        <Route path="/empresario" element={<EmpresarioDashboard />} />
        <Route path="/clubes" element={<ClubesDashboard />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
