import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import WelcomePage from './Frontend/WelcomePage';
import VotingPage from './Frontend/VotingPage';
function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<WelcomePage />} />
          <Route path="VotingPage" element={<VotingPage />} />
          {/* <Route path="VotingPage" element={<VotingPage />} /> */}
        </Routes>
      </main>
    </BrowserRouter >
  );
}

export default App;
