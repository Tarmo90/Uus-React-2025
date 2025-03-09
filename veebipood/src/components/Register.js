import React from 'react';
import './Register.css';

const Register = () => {
  return (
    <div className="register">
      <h2>Registreeru</h2>
      <form>
        <input type="text" placeholder="Nimi" required />
        <input type="email" placeholder="E-post" required />
        <input type="password" placeholder="Parool" required />
        <button type="submit">Registreeru</button>
      </form>
    </div>
  );
};

export default Register;