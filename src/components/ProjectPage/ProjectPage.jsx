import React, { useState } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import './ProjectPage.css';

const ProjectCard = ({ title, image, description }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);
  const previewText = description.length > 250 ? description.slice(0, 250) + '...' : description;

  return (
    <Card className={`project-card ${expanded ? 'expanded' : ''}`}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className={`project-description ${expanded ? 'expanded' : ''}`}>
          {expanded ? description : previewText}
        </div>
        <Button variant="secondary" onClick={toggleExpand}>
          {expanded ? 'Show Less' : 'Learn More'}
        </Button>
      </Card.Body>
    </Card>
  );
};

const ProjectPage = () => {
  const projects = [
    {
      title: 'Water Project',
      image: require('../../Assest/HomeBack/hp1.jpeg'),
      description:
        'Access to clean drinking water is a fundamental necessity, yet many rural communities struggle with water scarcity. To address this issue, the Human Development Society of India (HDSI) has undertaken the construction of drinking water wells in water-deficient areas. These wells provide a reliable and sustainable source of clean water, reducing the risk of waterborne diseases and improving overall health. By involving local communities in the planning and maintenance of these wells, HDSI ensures long-term sustainability and ownership. This initiative has significantly reduced the time and effort spent by women and children in fetching water, allowing them to focus on education and other productive activities.'
    },
    {
      title: 'Education',
      image: require('../../Assest/HomeBack/hp.jpeg'),
      description:
        'The Human Development Society of India (HDSI) is dedicated to delivering quality education to underserved communities, particularly in rural and tribal regions. As part of this commitment, HDSI has successfully established three English-medium schools that provide affordable, high-quality education to children from marginalized backgrounds. These low-fee schools are designed to promote holistic development by integrating innovative teaching methodologies, digital learning tools, and activity-based pedagogy. Through this initiative, HDSI ensures that every child, regardless of socio-economic status, has the opportunity to access modern and meaningful education.'
    },
    {
      title: 'Livelihood',
      image: require('../../Assest/HomeBack/gs.JPG'),
      description:
        'HDSI runs various livelihood initiatives in rural Amravati to create sustainable income opportunities. Our projects focus on animal husbandry, small-scale product manufacturing, and agriculture. By equipping communities with resources and skills, we promote economic independence.'
    }
  ];

  return (
    <div>
      <section className="project-header">
        <div className="container">
          <h1>Our Projects</h1>
          <p>Explore our wide range of impactful projects that are transforming lives and communities.</p>
        </div>
      </section>

      <section className="project-gallery">
        <div className="container">
          <Row>
            {projects.map((project, idx) => (
              <Col md={4} key={idx}>
                <ProjectCard {...project} />
              </Col>
            ))}
          </Row>
          <div className="load-more-btn">
            <Button variant="primary">Load More Projects</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
