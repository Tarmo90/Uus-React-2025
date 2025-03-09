import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login">
      <h2>Logi sisse</h2>
      <form>
        <input type="email" placeholder="E-post" required />
        <input type="password" placeholder="Parool" required />
        <button type="submit">Logi sisse</button>
      </form>
    </div>
  );
};

export default Login;