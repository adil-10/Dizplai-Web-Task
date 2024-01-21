import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import WelcomePage from './Frontend/WelcomePage';
import VotingPage from './Frontend/VotingPage';
import Results from './Frontend/Results';

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path="VotingPage" element={<VotingPage />} />
          <Route path="Results" element={<Results />} />
        </Routes>
      </main>
    </BrowserRouter >
  );
}

export default App;
