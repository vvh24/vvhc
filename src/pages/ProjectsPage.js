import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { AnimatedCard } from '../components/animations/AnimatedCard';
import { FadeInSection } from '../components/animations/FadeInSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function ProjectsPage() {
  // Define projects data directly in the component
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-featured online store built with React and Node.js with payment processing and admin dashboard.',
      image: '/assets/images/project1.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      githubLink: 'https://github.com/yourusername/project-1',
      liveLink: 'https://project-1-demo.com',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A productivity application for managing daily tasks and projects with drag-and-drop functionality.',
      image: '/assets/images/project2.jpg',
      technologies: ['React', 'Firebase', 'Material-UI'],
      githubLink: 'https://github.com/yourusername/project-2',
      liveLink: 'https://project-2-demo.com',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application showing forecasts and historical data from multiple weather APIs.',
      image: '/assets/images/project3.jpg',
      technologies: ['JavaScript', 'Bootstrap', 'APIs'],
      githubLink: 'https://github.com/yourusername/project-3',
      liveLink: 'https://project-3-demo.com',
      featured: false
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Bootstrap with animations and dark mode.',
      image: '/assets/images/project4.jpg',
      technologies: ['React', 'Bootstrap', 'Framer Motion'],
      githubLink: 'https://github.com/yourusername/my-portfolio',
      liveLink: 'https://your-portfolio-url.com',
      featured: true
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for tracking social media metrics across multiple platforms.',
      image: '/assets/images/project5.jpg',
      technologies: ['React', 'D3.js', 'Firebase'],
      githubLink: 'https://github.com/yourusername/project-5',
      liveLink: 'https://project-5-demo.com',
      featured: false
    },
    {
      id: 6,
      title: 'Recipe Finder App',
      description: 'Mobile-responsive application for finding recipes based on available ingredients.',
      image: '/assets/images/project6.jpg',
      technologies: ['JavaScript', 'APIs', 'CSS'],
      githubLink: 'https://github.com/yourusername/project-6',
      liveLink: 'https://project-6-demo.com',
      featured: false
    }
  ];

  const [filter, setFilter] = useState('all');
  
  // Get unique technologies from all projects
  const allTechnologies = [...new Set(projects.flatMap(project => project.technologies))];
  
  // Filter projects based on selected technology
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.technologies.includes(filter));
  
  return (
    <main className="py-5">
      <Container>
        <FadeInSection>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h1 className="gradient-text fw-bold mb-4">My Projects</h1>
              <p className="lead">
                Here are some of the projects I&apos;ve worked on. You can filter by technology.
              </p>
            </Col>
          </Row>
        </FadeInSection>
        
        <FadeInSection>
          <Row className="mb-4">
            <Col className="d-flex flex-wrap justify-content-center gap-2">
              <Button 
                variant={filter === 'all' ? 'primary' : 'outline-primary'} 
                onClick={() => setFilter('all')}
                className="mb-2"
              >
                All
              </Button>
              
              {allTechnologies.map((tech, index) => (
                <Button 
                  key={index}
                  variant={filter === tech ? 'primary' : 'outline-primary'} 
                  onClick={() => setFilter(tech)}
                  className="mb-2"
                >
                  {tech}
                </Button>
              ))}
            </Col>
          </Row>
        </FadeInSection>
        
        <Row>
          {filteredProjects.map((project, index) => (
            <Col md={6} lg={4} key={project.id} className="mb-4">
              <FadeInSection delay={0.1 * index}>
                <AnimatedCard className="project-card h-100">
                  <img 
                    src={`https://via.placeholder.com/600x400?text=${project.title}`}
                    alt={project.title} 
                    className="img-fluid w-100"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="project-overlay">
                    <h3 className="h5 mb-2">{project.title}</h3>
                    <p className="small mb-3">{project.description}</p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="badge bg-primary">{tech}</span>
                      ))}
                    </div>
                    <div className="d-flex gap-2">
                      <a 
                        href={project.githubLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-sm btn-dark"
                      >
                        <FontAwesomeIcon icon={faGithub} className="me-1" /> Code
                      </a>
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-sm btn-primary"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="me-1" /> Demo
                      </a>
                    </div>
                  </div>
                </AnimatedCard>
              </FadeInSection>
            </Col>
          ))}
        </Row>
        
        {filteredProjects.length === 0 && (
          <Row className="mt-5">
            <Col className="text-center">
              <h3>No projects found with the selected technology.</h3>
              <Button 
                variant="primary" 
                onClick={() => setFilter('all')}
                className="mt-3"
              >
                Show All Projects
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    </main>
  );
}

export default ProjectsPage;