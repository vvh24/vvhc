import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FadeInSection } from '../animations/FadeInSection';

function Footer() {
  return (
    <footer className="footer mt-auto">
      <Container>
        <FadeInSection>
          <Row className="mb-5">
            <Col lg={4} className="mb-4 mb-lg-0">
              <h3 className="gradient-text fw-bold mb-4">Valeria Heredia</h3>
              <p>
                A passionate web developer focused on creating impactful digital experiences.
              </p>
            </Col>
            
            <Col lg={4} className="mb-4 mb-lg-0">
              <h4 className="text-white mb-4">Quick Links</h4>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/" className="text-white-50 text-decoration-none">Home</a></li>
                <li className="mb-2"><a href="/about" className="text-white-50 text-decoration-none">About</a></li>
                <li className="mb-2"><a href="/projects" className="text-white-50 text-decoration-none">Projects</a></li>
                <li className="mb-2"><a href="/contact" className="text-white-50 text-decoration-none">Contact</a></li>
              </ul>
            </Col>
            
            <Col lg={4}>
              <h4 className="text-white mb-4">Get In Touch</h4>
              <p className="text-white-50 mb-2">
                Email: valeriahcrespo@gmail.com
              </p>
              <div className="social-icons">
                <a href="https://github.com/vvh24" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/valeria-heredia-101452326/" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </div>
            </Col>
          </Row>
        </FadeInSection>
        
        <Row>
          <Col className="text-center text-white-50 py-3 border-top border-secondary">
            <small>© {new Date().getFullYear()} Valeria Heredia. All Rights Reserved.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;