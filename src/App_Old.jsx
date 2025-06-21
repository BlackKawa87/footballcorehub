import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header.jsx';
import AppRoutes from './routes/AppRoutes.jsx';

const App = () => (
  <BrowserRouter>
    <Header />
    <AppRoutes />
  </BrowserRouter>
);

export default App;
