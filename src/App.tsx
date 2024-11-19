import React from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Challenges } from './components/Challenges';
import { Rewards } from './components/Rewards';
import { Profile } from './components/Profile';
import { Community } from './components/Community';
import { PricingPlans } from './components/pricing/PricingPlans';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/community" element={<Community />} />
          <Route path="/premium" element={<PricingPlans />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;