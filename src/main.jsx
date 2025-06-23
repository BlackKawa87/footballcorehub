import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App_Old.jsx';
import './index.css'; // ← Isso importa o Tailwind

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
