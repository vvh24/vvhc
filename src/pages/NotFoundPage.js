import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AnimatedText } from '../components/animations/AnimatedText';
import { FadeInSection } from '../components/animations/FadeInSection';

function NotFoundPage() {
  return (
    <main className="py-5 d-flex align-items-center" style={{ minHeight: '80vh' }}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8}>
            <FadeInSection>
              <h1 className="display-1 fw-bold gradient-text">404</h1>
              <AnimatedText 
                text="Page Not Found" 
                type="heading" 
                className="h2 mb-4"
              />
              <p className="lead mb-5">
                The page you are looking for doesn't exist or has been moved.
              </p>
              <Button as={Link} to="/" variant="primary" className="btn-modern">
                Back to Home
              </Button>
            </FadeInSection>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default NotFoundPage;