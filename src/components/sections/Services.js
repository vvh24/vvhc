import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faMobile, faServer, faDatabase, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FadeInSection } from '../animations/FadeInSection';
import { servicesData } from '../../data/services';

function Services() {
  return (
    <section className="py-5">
      <Container>
        <FadeInSection>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="gradient-text fw-bold mb-4">What I Do</h2>
              <p className="lead">
                I design and develop experiences that make people's lives simpler.
              </p>
            </Col>
          </Row>
        </FadeInSection>
        
        <Row>
          {servicesData.map((service, index) => (
            <Col md={6} lg={4} key={index} className="mb-4">
              <FadeInSection delay={0.2 * index} direction="up">
                <div className="glass-card p-4 text-center h-100">
                  <div className="rounded-circle bg-primary d-inline-flex p-3 mb-4">
                    <FontAwesomeIcon icon={getIcon(service.icon)} className="text-white fa-2x" />
                  </div>
                  <h3 className="h4 mb-3">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </FadeInSection>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

// Helper function to get the right icon based on string
function getIcon(iconName) {
  const icons = {
    'code': faCode,
    'laptop-code': faLaptopCode,
    'mobile': faMobile,
    'server': faServer,
    'database': faDatabase,
    'globe': faGlobe
  };
  
  return icons[iconName] || faCode;
}

export default Services;