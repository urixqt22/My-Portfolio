import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo"><a href="#home">Jorick Farinas</a></h1>
        <nav className={`nav ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </ul>
        </nav>
        <button className="nav-toggle" onClick={toggleMenu}>
          <span className="hamburger"></span>
        </button>
      </div>
    </header>
  );
}

export default Header;
