import React from 'react';
import Contact from '../components/sections/Contact';
import { Container, Row, Col } from 'react-bootstrap';
import { FadeInSection } from '../components/animations/FadeInSection';

function ContactPage() {
  return (
    <main>
      <section className="py-5 bg-light">
        <Container>
          <FadeInSection>
            <Row className="justify-content-center text-center mb-5">
              <Col lg={8}>
                <h1 className="gradient-text fw-bold mb-4">Contact Me</h1>
                <p className="lead">
                  Have a question or want to work together? Feel free to get in touch with me.
                </p>
              </Col>
            </Row>
          </FadeInSection>
        </Container>
      </section>
      
      <Contact />
      
      <section className="py-5">
        <Container>
          <FadeInSection>
            <Row className="justify-content-center">
              <Col lg={10}>
                <div className="glass-card p-4">
                  <h3 className="mb-4">Find Me On The Map</h3>
                  <div style={{ height: '400px', width: '100%', borderRadius: '10px', overflow: 'hidden' }}>
                    {/* You can replace this with an actual embedded map */}
                    <div 
                      style={{ 
                        height: '100%', 
                        width: '100%', 
                        backgroundColor: '#e9ecef',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <p className="mb-0">Map Placeholder - Add your Google Maps or other map service embed here</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </FadeInSection>
        </Container>
      </section>
    </main>
  );
}

export default ContactPage;