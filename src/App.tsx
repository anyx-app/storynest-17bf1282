import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';

// Placeholder components for routes not yet implemented
const Progress = () => <div className="p-8 text-center text-slate-500 font-medium">Progress Tracking Coming Soon!</div>;
const Achievements = () => <div className="p-8 text-center text-slate-500 font-medium">Achievements Coming Soon!</div>;

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Landing />} />

      {/* Protected App Routes */}
      <Route path="/app" element={<AppShell />}>
        <Route index element={<Dashboard />} />
        <Route path="progress" element={<Progress />} />
        <Route path="achievements" element={<Achievements />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
