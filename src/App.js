import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import FilePage from './FilePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/file/:filename" element={<FilePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
