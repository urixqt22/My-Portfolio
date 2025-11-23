import React from 'react';
import './Skills.css';

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 'Advanced' },
    { name: 'React', level: 'Advanced' },
    { name: 'HTML5', level: 'Advanced' },
    { name: 'CSS3', level: 'Advanced' },
    { name: 'Node.js', level: 'Intermediate' },
    { name: 'Git', level: 'Advanced' },
    { name: 'Responsive Design', level: 'Advanced' },
    { name: 'RESTful APIs', level: 'Intermediate' },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <h3>{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
