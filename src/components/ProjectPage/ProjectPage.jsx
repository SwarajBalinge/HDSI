import React from 'react';
import { Button, Card, Row, Col, Form } from 'react-bootstrap'; 
import './ProjectPage.css';  

const ProjectPage = () => {
  return (
    <div>
     
      <section className="project-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Explore our wide range of impactful projects that are transforming lives and communities.</p>
        </div>
      </section>

     
      <section className="filter-section">
        <div className="container">
          <Row>
            <Col md={6}>
              <Form>
                <Form.Group controlId="categorySelect">
                  <Form.Label>Filter by Category</Form.Label>
                  <Form.Control as="select" defaultValue="All">
                    <option>All</option>
                    <option>Water Project</option>
                    <option>Education</option>
                    <option>Livlihood</option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>
            <Col md={6} className="d-flex justify-content-end align-items-center">
              <Button variant="primary">Search</Button>
            </Col>
          </Row>
        </div>
      </section> 

    
      <section className="project-gallery">
        <div className="container">
          <Row>
            <Col md={4}>
              <Card className="project-card">
                <Card.Img variant="top" src={require('../../Assest/HomeBack/hp1.jpeg')} />
                <Card.Body>
                  <Card.Title>Water Project</Card.Title>
                  <Card.Text>
                    Access to clean drinking water is a fundamental necessity, yet many rural communities struggle with water scarcity. To address this issue, the Human Development Society of India (HDSI) has undertaken the construction of drinking water wells in water-deficient areas. These wells provide a reliable and sustainable source of clean water, reducing the risk of waterborne diseases and improving overall health. By involving local communities in the planning and maintenance of these wells, HDSI ensures long-term sustainability and ownership. This initiative has significantly reduced the time and effort spent by women and children in fetching water, allowing them to focus on education and other productive activities.
                  </Card.Text>
                  <Button variant="secondary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="project-card">
                <Card.Img variant="top" src={require('../../Assest/HomeBack/hp.jpeg')} />
                <Card.Body>
                  <Card.Title>Education</Card.Title>
                  <Card.Text>
                    The Human Development Society of India (HDSI) is dedicated to delivering quality education to underserved communities, particularly in rural and tribal regions. As part of this commitment, HDSI has successfully established three English-medium schools that provide affordable, high-quality education to children from marginalized backgrounds. These low-fee schools are designed to promote holistic development by integrating innovative teaching methodologies, digital learning tools, and activity-based pedagogy. Through this initiative, HDSI ensures that every child, regardless of socio-economic status, has the opportunity to access modern and meaningful education.




                  </Card.Text>
                  <Button variant="secondary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="project-card">
                <Card.Img variant="top" src={require('../../Assest/HomeBack/gs.JPG')} />
                <Card.Body>
                  <Card.Title>Livlihood</Card.Title>
                  <Card.Text>
                    HDSI runs various livelihood initiatives in rural Amravati to create sustainable income opportunities.
                    Our projects focus on animal husbandry, small-scale product manufacturing, and agriculture.
                    By equipping communities with resources and skills, we promote economic independence                  </Card.Text>
                  <Button variant="secondary">Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

       
          <div className="load-more-btn">
            <Button variant="primary">Load More Projects</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
export default ProjectPage;