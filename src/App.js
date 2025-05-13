import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#0d0d0d', color: 'white', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', padding: '3rem 1rem' }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Kemikaru Romance</h1>
        <p style={{ fontSize: '1.5rem' }}>
          A story-based visual novel about burnout, chemistry... and the collapse of reality.
        </p>
      </header>

      <section style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '2rem' }}>About the Game</h2>
        <p>
          You are a burnt-out college student and chemistry major. Hoping for peace, you accept an invitation to
          vacation on an island owned by your childhood friend Barron. But the more you relax, the stranger everything
          becomes. People act... wrong. Reality doesn't behave as it should. Your choices may hold more power than you realize.
        </p>
      </section>

      <section style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Meet the Characters</h2>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          <li><strong>Florence:</strong> Energetic, bubbly, extroverted — secretly a yandere.</li>
          <li><strong>Irene:</strong> Kuudere lead scientist; shy, smart, obsessed with manga.</li>
          <li><strong>Natsuko:</strong> Athletic and fashion-forward tomboy with bold energy.</li>
          <li><strong>Cathaline:</strong> A gothic lolita who loves the occult... and sadism.</li>
          <li><strong>Hydro:</strong> A hardened island native with a tragic past and a soft spot for family.</li>
          <li><strong>Barron:</strong> Your childhood friend — goofy, cringe, and hiding depression.</li>
          <li><strong>Ozskar:</strong> Delusional couch potato gamer who thinks he’s the protagonist.</li>
        </ul>
      </section>

      <section style={{ padding: '2rem' }}>
        <h2 style={{ fontSize: '2rem' }}>Features</h2>
        <ul>
          <li>📖 Deep branching story with romance and mystery</li>
          <li>🎭 Karma system: positive or negative choices shape reality</li>
          <li>🧠 Characters may break the fourth wall... if you push them</li>
          <li>📓 Save system is integrated into the story as your diary</li>
          <li>📱 Persona-style phone UI for navigation</li>
          <li>🎮 Mini-games and unlockable routes</li>
        </ul>
      </section>

      <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: '#111' }}>
        <p>Follow development on social media or wishlist soon.</p>
        <p>Email: <a href="mailto:dev@kemikarugame.com" style={{ color: '#66ccff' }}>dev@kemikarugame.com</a></p>
      </footer>
    </div>
  );
}

export default App;
