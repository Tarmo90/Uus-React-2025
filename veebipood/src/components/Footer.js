import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Ikoonid vasakus nurgas */}
      <div className="social-icons-left">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="icon" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="icon" />
        </a>
      </div>

      {/* Autoriõiguste tekst ja lingid */}
      <div className="footer-content">
        <p>© 2023 Tark Kaupleja. Kõik õigused kaitstud.</p>
        <div className="footer-links">
          <a href="/kasutustingimused">Kasutustingimused</a>
          <a href="/privaatsuspoliitika">Privaatsuspoliitika</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;