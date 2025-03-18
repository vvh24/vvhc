import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { projects } from '../data/projects';
import { AnimatedCard } from '../components/animations/AnimatedCard';
import { FadeInSection } from '../components/animations/FadeInSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

function ProjectsPage() {
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
                Here are some of the projects I've worked on. You can filter by technology.
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
                    src={project.image} 
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