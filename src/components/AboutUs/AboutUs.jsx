import React from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import './AboutUs.css';
import {
  FaGlobeAmericas,
  FaBalanceScale,
  FaHandsHelping,
  FaFistRaised,
  FaPeopleArrows
} from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="aboutus-hero-section">
        <div className="aboutus-hero-content">
          <h1>About HDSI Foundation</h1>
          <p>
            Learn more about the mission, vision, and values that drive us to create a positive
            impact in the world.
          </p>
          <Button variant="primary" href="#mission-section">Explore Our Work</Button>
        </div>
      </section>

      {/* Main About Section */}
      <section id="mission-section" className="aboutus-section">
        <Container>
          {/* Who We Are */}
          <Row>
            <Col md={12}>
              <Card className="aboutus-card">
                <Card.Body className="aboutus-card-body">
                  <Card.Title className="aboutus-card-title">Who We Are?</Card.Title>
                  <Card.Text className="aboutus-card-text">
                    The Human Development Society of India (HDSI) is a non-profit dedicated to transforming marginalized communities through education, skill development, geriatric care, and sustainable livelihoods. With a vision of inclusive growth, we work at the grassroots level, providing essential services and opportunities that empower families to thrive.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Mission & Vision */}
          <Row className="mt-4">
            <Col md={6}>
              <Card className="aboutus-card">
                <Card.Body className="aboutus-card-body">
                  <Card.Title className="aboutus-card-title">Our Mission</Card.Title>
                  <Card.Text className="aboutus-card-text">
                    We empower rural and urban communities by enhancing access to education, skill training, livelihood support, and water projects, ensuring dignity and economic independence for all.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="aboutus-card">
                <Card.Body className="aboutus-card-body">
                  <Card.Title className="aboutus-card-title">Our Vision</Card.Title>
                  <Card.Text className="aboutus-card-text">
                    A just and inclusive society where every individual, regardless of their background, has access to education, skills and sustainable livelihoods, enabling them to live with dignity and opportunity.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Our Values */}
          <Row className="mt-4">
            <Col md={12}>
              <Card className="aboutus-card">
                <Card.Body className="aboutus-card-body">
                  <Card.Title className="aboutus-card-title">Our Values</Card.Title>
                  <ListGroup variant="flush" className="aboutus-value-list">
                    <ListGroup.Item className="aboutus-list-group-item">
                      <div className="aboutus-value-item-row">
                        <FaGlobeAmericas className="aboutus-value-icon-lg" />
                        <div className="aboutus-value-text">
                          <h5>Inclusivity</h5>
                          <p>We embrace and serve diverse communities with fairness and respect.</p>
                        </div>
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item className="aboutus-list-group-item">
                      <div className="aboutus-value-item-row">
                        <FaBalanceScale className="aboutus-value-icon-lg" />
                        <div className="aboutus-value-text">
                          <h5>Integrity</h5>
                          <p>We uphold transparency and ethics in every step of our work.</p>
                        </div>
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item className="aboutus-list-group-item">
                      <div className="aboutus-value-item-row">
                        <FaHandsHelping className="aboutus-value-icon-lg" />
                        <div className="aboutus-value-text">
                          <h5>Compassion</h5>
                          <p>We approach every challenge with empathy and kindness.</p>
                        </div>
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item className="aboutus-list-group-item">
                      <div className="aboutus-value-item-row">
                        <FaFistRaised className="aboutus-value-icon-lg" />
                        <div className="aboutus-value-text">
                          <h5>Empowerment</h5>
                          <p>We equip individuals with tools and skills to thrive independently.</p>
                        </div>
                      </div>
                    </ListGroup.Item>

                    <ListGroup.Item className="aboutus-list-group-item">
                      <div className="aboutus-value-item-row">
                        <FaPeopleArrows className="aboutus-value-icon-lg" />
                        <div className="aboutus-value-text">
                          <h5>Collaboration</h5>
                          <p>We believe in the power of partnerships to drive lasting change.</p>
                        </div>
                      </div>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Our Impact */}
          <Row className="mt-4">
            <Col md={12}>
              <Card className="aboutus-card aboutus-impact-card">
                <Card.Body className="aboutus-card-body">
                  <Card.Title className="aboutus-card-title">Our Impact</Card.Title>
                  <Card.Text className="aboutus-card-text">
                    Since its inception, HDSI has transformed thousands of lives through impactful initiatives. We have provided scholarships, built wells for safe drinking water, empowered women with livelihood opportunities, and ensured quality education for children. Our efforts have helped entire communities thrive, fostering economic independence and social well-being.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer Section */}
      <footer className="aboutus-footer-section">
        <div className="container">
          <p>Contact Us: info@HDSIfoundation.org</p>
          <p>&copy; 2025 HDSI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;