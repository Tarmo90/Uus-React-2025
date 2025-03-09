import React, { useState } from 'react';
import './Membership.css';

const Membership = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Siin saad lisada makseprotsessi (nt Stripe integreerimine)
    alert(`Liitumine õnnestus! Saadame Discordi lingi aadressile ${email}`);
  };

  return (
    <div className="membership">
      <h2>Liitu kogukonnaga</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Sisesta oma e-posti aadress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Maksa ja liitu</button>
      </form>
    </div>
  );
};

export default Membership;