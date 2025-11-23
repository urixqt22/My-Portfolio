import React from 'react';
import './Projects.css';

function Projects() {
  const projectList = [
    {
      title: 'The Last Signal',
      description: 'A brief description of Project One. This project involved [mention technologies or features, e.g., building a responsive UI with React and integrating with a RESTful API].',
      image: 'the last signal.jpg', // Placeholder image
      link: 'https://github.com/urixqt22/the-last-signal', 
      github: 'https://github.com/urixqt22/the-last-signal', 
    },
    {
      title: 'iGit In My Oven',
      description: 'An overview of Project Two. I utilized [mention technologies or features, e.g., Node.js for the backend, MongoDB for the database, and user authentication].',
      image: 'cart.png',
      link: '#',
      github: '#',
    },
    {
      title: 'Task List',
      description: 'This project was a personal portfolio site designed to host my academic work and independent applications. I used a component-driven architecture built with React and focused heavily on implementing modern CSS techniques to ensure full responsiveness and accessibility.',
      image: 'task list.png',
      link: '#',
      github: '#',
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
