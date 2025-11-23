import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <p>
            Hello! I'm Jorick Farinas, a passionate and dedicated 3rd-year Computer Science student and currently unemployed individual
            with a strong focus on web application development. 
            My enthusiasm lies primarily in crafting beautiful, functional, 
            and efficient user experiences using modern technologies.
          </p>
          <p>
            My journey into programming started with a fascination for how interactive systems
             are engineered. This has led me to dive deep into JavaScript, TypeScript, and frameworks 
             like React, allowing me to build robust and scalable web solutions.
              I enjoy the intellectual challenge of solving complex technical problems and 
               absorbing new skills to stay current with industry best practices.
          </p>
          <p>
            When I’m not coding for classes or applications, you can find me tinkering with open-source projects to deepen my understanding of software architecture or exploring new algorithmic challenges to sharpen my problem-solving skills. 
            I'm always open to new challenges and collaborations. 
            Let's build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
