import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PurchRedirect from './components/PurchRedirect';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/purch-red" element={<PurchRedirect />} />
      </Routes>
    </Router>
  );
}

export default App;
