import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AnimatedCard } from '../animations/AnimatedCard';
import { FadeInSection } from '../animations/FadeInSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function FeaturedProjects() {
  // Define featured projects directly in the component
  const featuredProjects = [
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
      id: 4,
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Bootstrap with animations and dark mode.',
      image: '/assets/images/project4.jpg',
      technologies: ['React', 'Bootstrap', 'Framer Motion'],
      githubLink: 'https://github.com/yourusername/my-portfolio',
      liveLink: 'https://your-portfolio-url.com',
      featured: true
    }
  ];
  
  return (
    <section className="py-5 bg-light">
      <Container>
        <FadeInSection>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="gradient-text fw-bold mb-4">Featured Projects</h2>
              <p className="lead">
                Take a look at some of my recent work
              </p>
            </Col>
          </Row>
        </FadeInSection>
        
        <Row>
          {featuredProjects.map((project, index) => (
            <Col md={6} lg={4} key={project.id} className="mb-4">
              <FadeInSection delay={0.2 * index}>
                <AnimatedCard className="project-card h-100">
                  <img 
                    src={project.image || "https://via.placeholder.com/300x200"}
                    alt={project.title} 
                    className="img-fluid w-100"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="project-overlay">
                    <h3 className="h5 mb-2">{project.title}</h3>
                    <p className="small mb-3">{project.description}</p>
                    <div className="d-flex gap-2 mb-3 flex-wrap">
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
        
        <Row className="mt-4">
          <Col className="text-center">
            <Button as={Link} to="/projects" variant="primary" className="btn-modern">
              View All Projects
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default FeaturedProjects;