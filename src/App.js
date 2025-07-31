// src/App.js

import React from 'react';
import LandingPage from './components/LandingPage'; // Importiamo la nostra landing page

function App() {
  // Per questa fase di validazione, l'intera applicazione è solo la LandingPage.
  // In futuro, qui potrai usare React Router per gestire diverse pagine.
  return (
    <LandingPage />
  );
}

export default App;