// main.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importa BrowserRouter
import './App/index.css';
import { App } from './App/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Envuelve el App en BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
