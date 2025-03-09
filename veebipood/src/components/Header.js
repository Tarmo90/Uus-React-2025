import React, { useState } from 'react';
import { FaUser, FaGlobe, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Kas kasutaja on sisse logitud
  const [language, setLanguage] = useState('et'); // Keele valik

  const handleLogout = () => {
    setIsLoggedIn(false); // Simuleeri väljalogimist
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value); // Muuda keelt
  };

  return (
    <header className="header">
      <div className="container"> {/* Lisa keskele joondatud konteiner */}
        <div className="logo">
          <Link to="/">
            <img src="/TK.png" alt="Forex Kogukond Logo" />
          </Link>
        </div>
        <div className="header-right">
          {/* Keele valik */}
          <div className="language-selector">
            <FaGlobe className="icon" />
            <select value={language} onChange={handleLanguageChange}>
              <option value="et">Eesti</option>
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </div>

          {/* Sisselogimine/Registreerimine või kasutaja profiil */}
          {isLoggedIn ? (
            <div className="user-profile">
              <FaUser className="icon" />
              <span>Kasutaja</span>
              <button onClick={handleLogout}>Logi välja</button>
            </div>
          ) : (
            <div className="auth-links">
              <Link to="/login">
                <FaSignInAlt className="icon" />
                Logi sisse
              </Link>
              <Link to="/register">
                <FaUserPlus className="icon" />
                Registreeru
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;