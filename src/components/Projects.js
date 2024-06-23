import React from 'react'
import portfolioimg from '../assets/images/projectportfolio.png';
import fashioncornerimg from '../assets/images/fashioncornerproject.png';
import taxcalculatorimg from '../assets/images/project3.jpg';


const projects = [
  {
    imgSrc: portfolioimg,
    altText: 'Project 1',
    title: 'Portfolio Website (Web App)',
    githubLink: 'https://github.com/username/portfolio',
    liveDemoLink: 'https://portfolio.example.com'
  },
  {
    imgSrc: fashioncornerimg,
    altText: 'Project 2',
    title: 'Fashion Corner (Web App)',
    githubLink: 'https://github.com/username/fashioncorner',
    liveDemoLink: 'https://fashioncornerproject.000webhostapp.com/index.php'
  },
  {
    imgSrc: taxcalculatorimg,
    altText: 'Project 3',
    title: 'Tax Calculator (Android App)',
    githubLink: 'https://github.com/username/taxcalculator',
    liveDemoLink: null
  }
];
function Projects() {
  return (
    <div>
      <section id="projects">
  <p className="section__text__p1">Browse My Recent</p>
  <h1 className="title">Projects</h1>
  <div className="experience-details-container">
    <div className="about-containers">
    {projects.map((project, index) => (
        <div className="details-container color-container" key={index}>
          <div className="article-container">
            <img
              src={project.imgSrc}
              alt={project.altText}
              className="project-img"
            />
          </div>
          <h2 className="experience-sub-title project-title">
            {project.title}
          </h2>
          <div className="btn-container">
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => window.open(project.githubLink, '_blank')}
            >
              Github
            </button>
            <button
              className="btn btn-color-2 project-btn"
              onClick={() => {
                if (project.liveDemoLink) {
                  window.open(project.liveDemoLink, '_blank');
                }
              }}
              disabled={!project.liveDemoLink}
              type="button"
            >
              Live Demo
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  )
}

export default Projects
