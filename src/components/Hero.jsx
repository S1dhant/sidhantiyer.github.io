import React from 'react';
import '../style.css'; // Make sure the path is correct based on your folder

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I’m <span className="highlight">Sidhant Iyer</span></h1>
        <h2 className="hero-subtitle">Data Scientist | AI Engineer | Creative Explorer</h2>
        <p className="hero-tagline">I solve problems at the intersection of data, code, and curiosity.</p>
        <a href="#projects" className="hero-btn">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
