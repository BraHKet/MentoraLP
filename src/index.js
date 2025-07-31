// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Importiamo i nostri stili globali puliti
import App from './App';

// Questa è la radice della tua applicazione React.
// Dice a React di "montare" il componente App all'interno dell'elemento
// con id 'root' nel tuo file public/index.html.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);