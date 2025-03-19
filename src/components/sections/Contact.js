import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FadeInSection } from '../animations/FadeInSection';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [showAlert, setShowAlert] = useState(false);
  const [alertVariant, setAlertVariant] = useState('success');
  const [alertMessage, setAlertMessage] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    setAlertVariant('success');
    setAlertMessage('Your message has been sent! I\'ll get back to you soon.');
    setShowAlert(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide alert after 5 seconds
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  
  return (
    <section className="py-5">
      <Container>
        <FadeInSection>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={8}>
              <h2 className="gradient-text fw-bold mb-4">Get In Touch</h2>
              <p className="lead">
                I'm always open to new opportunities and interesting projects.
              </p>
            </Col>
          </Row>
        </FadeInSection>
        
        <Row>
          <Col lg={5} className="mb-5 mb-lg-0">
            <FadeInSection direction="right">
              <h3 className="mb-4">Contact Information</h3>
              
              <div className="d-flex align-items-center mb-4">
                <div className="rounded-circle bg-primary p-3 me-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                </div>
                <div>
                  <h4 className="h5 mb-1">Email</h4>
                  <p className="mb-0">valeriahcrespo@gmail.com</p>
                </div>
              </div>
              
              <div className="d-flex align-items-center mb-4">
                <div className="rounded-circle bg-primary p-3 me-3">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-white" />
                </div>
                <div>
                  <h4 className="h5 mb-1">Location</h4>
                  <p className="mb-0">United States</p>
                </div>
              </div>
            </FadeInSection>
          </Col>
          
          <Col lg={7}>
            <FadeInSection direction="left">
              <div className="glass-card p-4">
                <h3 className="mb-4">Send Me a Message</h3>
                
                {showAlert && (
                  <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
                    {alertMessage}
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    
                    <Col md={6} className="mb-3">
                      <Form.Group>
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>
                  
                  <Button type="submit" variant="primary" className="btn-modern">
                    Send Message
                  </Button>
                </Form>
              </div>
            </FadeInSection>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;