import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p className="contact-intro">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>
        <div className="contact-links">
          <a
            href="mailto:your.email@example.com"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope"></i> urixfarinas@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/jorick-christian-farinas-2b8004312/"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/urixqt22"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
        <p className="footer-text">
          Made with ❤️ by Jorick © {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}

export default Contact;
