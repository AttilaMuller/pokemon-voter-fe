import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import { NavBar } from './components/NavBar/NavBar';
import { VotingPage } from './pages/Voting/VotingPage';
import { TopTenPage } from './pages/TopTen/TopTenPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<VotingPage />} />
          <Route path="/top-ten" element={<TopTenPage />} />
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
