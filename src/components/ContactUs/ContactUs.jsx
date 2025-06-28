import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Reach out to us with any questions or feedback!</p>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <Container>
          <Row>
            <Col md={12}>
              <Card className="mb-4">
                <Card.Body>
                  <Card.Title>We'd Love to Hear from You</Card.Title>
                  <Card.Text>
                    Whether you have questions, feedback, or just want to get in touch, feel free to reach
                    out. Our team is happy to assist you with anything you need.
                  </Card.Text>
                  <Card.Text>
                    <strong>Phone:</strong> +91 9422152138
                    <br />
                    <strong>Email:</strong> hdsi08@gmail.com
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              <h4>Contact Information</h4>
              <Card>
                <Card.Body>
                  <Card.Title>Head Office</Card.Title>
                  <Card.Text>
                    <strong>HDSI</strong>
                    <br />
                    Address: HDSI,642,Gaius House,Dhotarkheda,Chikhaldara Road,District Amravati,Block Achalpur - 444806
                    <br />
                    Phone: +19 9422152138
                    <br />
                    Email: hdsi08@gmail.com
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <h4>Send Us a Message</h4>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="contact-footer-section">
        <div className="container">
          <p>Contact Us: hdsi08@gmail.com</p>
          <p>&copy; 2025 HDSI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;