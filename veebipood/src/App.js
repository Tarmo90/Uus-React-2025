import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Membership from './components/Membership';
import Login from './components/Login';
import Register from './components/Register';
import logo from './assets/TK.png'; // Impordi logo pilt
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Taustalogo */}
        <div className="background-logo">
          <img src={logo} alt="Forex Kogukond Logo" />
        </div>

        {/* Päis */}
        <div className="container">
          <Header />
        </div>

        {/* Sisu */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>

        {/* Jalus */}
        <div className="container">
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;