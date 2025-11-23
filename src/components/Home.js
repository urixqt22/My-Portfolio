import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home-content">
          <img src="jorick.jpg" alt="Jorick" className="profile-pic" />
          <p className="greeting">Hello, I'm</p>
          <h2 className="name">Jorick</h2>
          <p className="title">A Passionate <span className="highlight">Web Developer</span></p>
          <p className="intro">
            Welcome to my portfolio! I build dynamic and responsive web applications.
            Explore my projects and skills below.
          </p>
          <div className="cta-buttons">
            <a href="#projects" className="btn primary">View Projects</a>
            <a href="#contact" className="btn secondary">Contact Me</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
