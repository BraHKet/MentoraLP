import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PurchRedirect from './components/PurchRedirect';
import InvestorLandingPage from './components/InvestorLandingPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InvestorLandingPage />} />
        <Route path="/purch-red" element={<PurchRedirect />} />
        <Route path="/lp" element={<LandingPage />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

export default App;
