import React from 'react';

function About() {
  return (
    <section className="section bg-light" id="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center text-md-start">
            <img 
              src="/your-photo.jpg" 
              alt="Your Photo" 
              className="rounded-circle mb-3 mb-md-0" 
              style={{ width: '192px', height: '192px', objectFit: 'cover' }} 
            />
          </div>
          <div className="col-md-8">
            <p style={{ fontSize: '1.1em' }}>
              Hi, I’m Alvin Medalla, a passionate and dedicated Bachelor of Science in Information Technology (BSIT) graduate. I have a strong interest in technology and enjoy turning ideas into functional, real-world solutions through code and system development.

Throughout my academic journey, I developed skills in problem-solving, critical thinking, and collaboration. I am highly motivated to continuously learn and adapt to new technologies, as I believe growth is essential in the ever-evolving IT industry.

I am eager to contribute my knowledge, enhance my technical expertise, and build meaningful digital solutions that make a difference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;