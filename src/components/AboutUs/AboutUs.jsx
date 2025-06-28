import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import './AboutUs.css'; 
const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>About HDSI Foundation</h1>
          <p>
            Learn more about the mission, vision, and values that drive us to create a positive
            impact in the world.
          </p>
          <Button variant="primary" href="#mission-section">Explore Our Work</Button>
        </div>
      </section>
  
      <section id="mission-section" className="about-section">
        <Container>
          <Row>
            <Col md={12}>
              <Card>
                <Card.Body>
                  <Card.Title>Who We Are?</Card.Title>
                  <Card.Text>
                    The Human Development Society of India (HDSI) is a non-profit dedicated to transforming marginalized communities through education, skill development, geriatric care, and sustainable livelihoods. With a vision of inclusive growth, we work at the grassroots level, providing essential services and opportunities that empower families to thrive.                  
                    </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Our Mission</Card.Title>
                  <Card.Text>
                    We empower rural and urban communities by enhancing access to education, skill training, livelihood support, and water projects, ensuring dignity and economic independence for all.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card>
                <Card.Body>
                  <Card.Title>Our Vision</Card.Title>
                  <Card.Text>
                    A just and inclusive society where every individual, regardless of their background, has access to education, skills and sustainable livelihoods, enabling them to live with dignity and opportunity.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        
          <Row className="mt-4">
            <Col md={12}>
              <Card>
                <Card.Body>
                  <Card.Title>Our Values</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>Inclusivity</ListGroup.Item>
                    <ListGroup.Item>Integrity</ListGroup.Item>
                    <ListGroup.Item>Compassion</ListGroup.Item>
                    <ListGroup.Item>Empowerment</ListGroup.Item>
                    <ListGroup.Item>Collaboration</ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>

    
          <Row className="mt-4">
            <Col md={12}>
              <Card>
                <Card.Body>
                  <Card.Title>Our Impact</Card.Title>
                  <Card.Text>
                    Since its inception, HDSI has transformed thousands of lives through impactful initiatives. We have provided scholarships, built wells for safe drinking water, empowered women with livelihood opportunities, and ensured quality education for children. Our efforts have helped entire communities thrive, fostering economic independence and social well-being. 
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="container">
          <p>Contact Us: info@HDSIfoundation.org</p>
          <p>&copy; 2025 HDSI . All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;