import React, { useState } from 'react';

function Projects() {
  const [projects] = useState([
    {
      id: 1,
      title: 'ArtCase',
      description: 'ArtCase: A Web-Based Digital Arts Showcase and Recognition Platform.',
      image: '/sems.png',
      app: 'https://artcase-app.vercel.app/'
    },
  ]);

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2>Projects & Capstone</h2>
        <div className="row">
          {projects.map(project => (
            <div className="col-md-4 mb-4" key={project.id}>
              <div className="card h-100">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <a href={project.app} className="btn btn-primary btn-sm me-2" target="_blank" rel="noreferrer">App Link</a>
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