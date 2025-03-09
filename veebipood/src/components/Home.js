import React from 'react';
import { Link } from 'react-router-dom'; // Impordi Link
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h2>Tere tulemast Forex Kogukonda!</h2>
      <p>Õpi forex kauplemist ja liitu meie kogukonnaga.</p>
      <Link to="/membership" className="cta-button">Liitu nüüd</Link>

      {/* Lisatud sisu kerimiseks */}
      <div className="content-section">
        <h3>Miks valida Forex Kogukond?</h3>
        <p>
          Meie kogukond pakub tõhusaid vahendeid ja ressursse, et aidata sul saada edukaks forex kauplejaks.
        </p>
        <div className="image-container">
          <img src="https://via.placeholder.com/400x200" alt="Forex näidis" />
        </div>
      </div>

      <div className="content-section">
        <h3>Meie eelised</h3>
        <ul>
          <li>Õppematerjalid algajatele ja edasijõudnutele</li>
          <li>Kogemustega kauplejate nõuanded</li>
          <li>Reaalajas turuanalüüs</li>
        </ul>
      </div>

      <div className="content-section">
        <h3>Alusta oma teekonda täna!</h3>
        <p>
          Liitu meie kogukonnaga ja saa juurdepääs eksklusiivsetele ressurssidele ning kogemustega kauplejate nõuannetele.
        </p>
        <Link to="/membership" className="cta-button">Liitu nüüd</Link>
      </div>

      <div className="content-section">
        <h3>Meist</h3>
        <p>
          Oleme forex kogukond, mis on pühendunud oma liikmete edukusele. Meie eesmärk on pakkuda parimaid vahendeid ja ressursse, et aidata sul saavutada oma finantsilisi eesmärke.
        </p>
      </div>

      <div className="content-section">
        <h3>Võta meiega ühendust</h3>
        <p>
          Kui sul on küsimusi või soovid rohkem teavet, võta meiega julgelt ühendust.
        </p>
        <Link to="/contact" className="cta-button">Võta ühendust</Link>
      </div>
    </div>
  );
};

export default Home;