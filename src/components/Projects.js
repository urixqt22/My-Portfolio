import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'The Last Signal',
      description: 'This project was a pure front-end simple HTML game designed and built using foundational web technologies: HTML5, CSS3, and vanilla JavaScript. It focused on mastering core programming logic, event handling, and efficient DOM manipulation to manage the game loop and render dynamic visuals directly in the browser. The project successfully demonstrated proficiency in building interactive user experiences without reliance on heavy frameworks, proving strong command of foundational JavaScript principles.',
      image: 'the last signal.jpg', 
      link: 'https://github.com/urixqt22/the-last-signal', 
      github: 'https://github.com/urixqt22/the-last-signal', 
    },
    {
      title: 'iGit In My Oven',
      description: 'This project was developed as a complex, front-end web application built exclusively with React. It focused on advanced state management, component composition, and handling complex user input for creating, editing, and filtering recipes. Key technical challenges included implementing robust form validation and managing application state efficiently using React hooks to ensure a smooth, dynamic user experience. It leverages an external, abstracted API for data persistence.',
      image: 'cart.png',
      link: 'https://github.com/MoiJrzxc/iGit-In-My-Cart',
      github: 'https://github.com/MoiJrzxc/iGit-In-My-Cart',
    },
    {
      title: 'Task List',
      description: 'This project was a personal portfolio site designed to host my academic work and independent applications. I used a component-driven architecture built with React and focused heavily on implementing modern CSS techniques to ensure full responsiveness and accessibility.',
      image: 'task list.png',
      link: 'https://github.com/MoiJrzxc/TaskFlow',
      github: 'https://github.com/MoiJrzxc/TaskFlow',
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectList.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-info">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-links">

                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn secondary small">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
