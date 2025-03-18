import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FadeInSection } from '../animations/FadeInSection';
import { SkillBar } from '../animations/SkillBar';
import { skills } from '../../data/skills';

function About() {
  return (
    <section className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="mb-5 mb-lg-0">
            <FadeInSection direction="right">
              <div className="position-relative">
                <img 
                  src="/assets/images/profile.jpg" 
                  alt="Your Name" 
                  className="img-fluid rounded" 
                  style={{ width: '100%', maxWidth: '400px' }}
                />
                <div className="position-absolute bottom-0 end-0 p-3 bg-primary text-white rounded">
                  <p className="mb-0">5+ Years Experience</p>
                </div>
              </div>
            </FadeInSection>
          </Col>
          
          <Col lg={7}>
            <FadeInSection direction="left">
              <h2 className="gradient-text fw-bold mb-4">About Me</h2>
              <p className="lead mb-4">
                A passionate Frontend Developer based in [Your Location].
              </p>
              <p className="mb-4">
                I'm a dedicated web developer with a strong focus on creating elegant, 
                efficient, and user-friendly web applications. With expertise in modern 
                frontend technologies like React, I enjoy bringing ideas to life through code.
              </p>
              <p className="mb-4">
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying outdoor activities.
              </p>
              
              <div className="d-flex gap-3 mb-4">
                <Button as={Link} to="/contact" variant="primary" className="btn-modern">
                  Contact Me
                </Button>
                <Button as={Link} to="/assets/resume.pdf" target="_blank" variant="outline-primary" className="btn-modern">
                  Download CV
                </Button>
              </div>
            </FadeInSection>
          </Col>
        </Row>
        
        <Row className="mt-5">
          <Col lg={12}>
            <FadeInSection>
              <h3 className="mb-4">My Skills</h3>
            </FadeInSection>
            
            <Row>
              {skills.map((skill, index) => (
                <Col md={6} key={index}>
                  <FadeInSection delay={0.1 * index}>
                    <SkillBar skillName={skill.name} percentage={skill.percentage} />
                  </FadeInSection>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;