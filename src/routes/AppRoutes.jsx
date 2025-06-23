import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; // <== Aqui está o novo

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    {/* outras rotas */}
  </Routes>
);

export default AppRoutes;
