import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { ParticlesBackground } from '../animations/ParticlesBackground';
import { AnimatedText } from '../animations/AnimatedText';
import { FadeInSection } from '../animations/FadeInSection';

function Hero() {
  return (
    <>
      <section className="hero-section d-flex align-items-center">
        <ParticlesBackground />
        <Container className="hero-content">
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <AnimatedText 
                text="Hello, I'm Your Name" 
                type="heading" 
                className="display-4 fw-bold mb-4"
              />
              
              <FadeInSection delay={0.5} direction="up">
                <h2 className="mb-4">
                  <span className="gradient-text">Front-End Developer</span>
                </h2>
              </FadeInSection>
              
              <FadeInSection delay={0.7} direction="up">
                <p className="lead mb-4">
                  I create modern web experiences with clean code and thoughtful design.
                </p>
              </FadeInSection>
              
              <FadeInSection delay={0.9} direction="up">
                <div className="d-flex gap-3">
                  <Button 
                    as={Link} 
                    to="/projects" 
                    variant="light" 
                    size="lg"
                    className="btn-modern"
                  >
                    View My Work 
                    <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                  </Button>
                  <Button 
                    as={Link} 
                    to="/contact" 
                    variant="outline-light" 
                    size="lg"
                    className="btn-modern"
                  >
                    Get In Touch
                  </Button>
                </div>
              </FadeInSection>
            </Col>
            
            <Col lg={6} className="d-flex justify-content-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="position-relative"
              >
                <div className="floating">
                  {/* This could be your profile image or a hero illustration */}
                  <div className="profile-image-container">
                    <div className="profile-image">
                      {/* Replace this with your actual image */}
                      <div style={{ 
                        width: 300, 
                        height: 300, 
                        borderRadius: "50%", 
                        background: "rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}>
                        <FontAwesomeIcon icon={faCode} size="5x" />
                      </div>
                    </div>
                    <div className="tech-icon top-icon">
                      <FontAwesomeIcon icon={faLaptopCode} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Hero;