import React, { useState, useEffect } from 'react';
import './homepage.css';
import Button from 'react-bootstrap/Button';
import {
  FaWater,
  FaToolbox,
  FaFemale,
  FaGraduationCap,
  FaUsers,
  FaLeaf,
  FaToilet,
  FaHeartbeat, 
  FaBuilding, 
  FaHandsHelping,
  FaChalkboardTeacher, 
  FaUsersCog 
} from 'react-icons/fa';

const CountUp = ({ endValue }) => {
  const [count, setCount] = useState(0);
useEffect(() => {
  let startValue = 0;
  const end = endValue;
  const duration = 3000; 
  const stepTime = Math.abs(Math.floor(duration / end));

  const interval = setInterval(() => {
    startValue += 1;
    setCount(startValue);

    if (startValue === end) {
      clearInterval(interval);
    }
  }, stepTime);

  return () => clearInterval(interval); // Cleanup on unmount
}, [endValue]);

return <h1>{count}{endValue === 10000 ? "+" : ""}</h1>; // Add "+" if 10,000+
};
const domainData = [
  {
    id: 1,
    title: "Water Project",
    tagline: "Making every drop count!",
    icon: <FaWater />,
    content:
      "In drought-prone Vidarbha, water scarcity is a critical challenge for communities. HDSI actively digs borewells and open wells, ensuring consistent access to water for drinking and farming.",
  },
  {
    id: 2,
    title: "Livelihood",
    tagline: "Empowering rural communities!",
    icon: <FaToolbox />,
    content:
      "HDSI supports income-generating activities for marginalized communities by offering training and seed funding. We collaborate with local artisans, farmers, and entrepreneurs to build sustainable businesses.",
  },
  {
    id: 3,
    title: "Women Empowerment",
    tagline: "Strength in unity!",
    icon: <FaFemale />,
    content:
      "HDSI empowers women through the formation of Self-Help Groups (SHGs) in rural areas. These SHGs provide financial support, training, and a platform for women to become economically independent.",
  },
  {
    id: 4,
    title: "Education",
    tagline: "Igniting young minds!",
    icon: <FaGraduationCap />,
    content:
      "We ensure access to quality early childhood and primary education in underserved areas. From building infrastructure to teacher training, we work to reduce the learning gap in rural communities.",
  },
  {
    id: 5,
    title: "Geriatric Care",
    tagline: "Dignity in every phase of life!",
    icon: <FaUsers />,
    content:
      "HDSI is establishing an old age home to support elderly individuals with specialized needs.This home will focus on the care of seniors with dementia and Alzheimer’s.Our goal is to provide a safe, loving, and dignified environment for the elderly.",
  },
  {
    id: 6,
    title: "Environment",
    tagline: "Growing greener futures!",
    icon: <FaLeaf />,
    content:
    "HDSI is an active participant in the Green Scout Movement, a global initiative for sustainability.Every year, we organize campaigns to plant and nurture 500 trees in various regions.We are committed to creating a greener, cleaner environment for future generation."
  },
  {
    id: 7,
    title: "Vocational Skills",
    tagline: "Crafting brighter futures!",
    icon: <FaUsersCog />,
    content:
      "HDSI equips tribal women with vocational training to enhance their employability and confidence.Skills like tailoring, beauty parlour services, and others open doors to new opportunities.Our training programs ensure economic independence and self-sufficiency for women.",
  },
  {
    id: 8,
    title: "Health & Sanitation",
    tagline: "Empowering healthier communities!",
    icon: <FaToilet />,
    content:
    "HDSI conducts awareness programs on personal hygiene, menstrual health, and self-care for women.Our sessions help break stigmas and promote a culture of health and dignity.By addressing crucial health and sanitation issues, we strive to build stronger communities.",
  },
];


const DomainBox = ({ title, tagline, icon, content }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleText = () => setExpanded(!expanded);
  const shortText = content.length > 280 ? content.slice(0, 280) + '...' : content;

  return (
    <div className="homepage-work-item">
      <div className="icon">{icon}</div>
      <h3>{title}</h3>
      <h6>{tagline}</h6>
      <p>{expanded || content.length <= 280 ? content : shortText}</p>
      {content.length > 280 && (
        <Button variant="link" className="read-more-btn" onClick={toggleText}>
          {expanded ? 'Show less' : 'Know more / How we work'}
        </Button>
      )}
    </div>
  );
};

const HomePage = () => {
  return (
    <div style={{ fontFamily: 'Poppins, sans-serif' }}>
      <section className="homepage-hero-section">
        <div className="homepage-hero-content">
          <h1>Welcome to HDSI</h1>
          <p>"Empowering Communities, Enabling Lives"</p>
          <Button variant="primary" href="#homepage-work-section">Learn More</Button>
        </div>
      </section>

      <section className="homepage-about-section">
        <div className="homepage-container">
          <h2>About HDSI</h2>
          <p>
            Human Development Society of India (HDSI) is dedicated to empowering marginalized communities through sustainable development initiatives in water projects, education, vocational training, and women empowerment. With a mission to create self-reliant individuals and resilient communities, we have impacted thousands of lives across India.
          </p>
        </div>
      </section>

      <section id="homepage-work-section" className="homepage-work-section">
        <div className="homepage-container">
          <h2>Our Work</h2>
          <div className="homepage-work-grid">
            {domainData.map((domain) => (
              <DomainBox key={domain.id} {...domain} />
            ))}
          </div>
        </div>
      </section>

      <section id="homepage-impact-section" className="homepage-impact-section">
        <div className="homepage-container">
          <h2 className="impact-header">Our Impact</h2>
          <div className="homepage-impact-grid">
            <div className="homepage-impact-item">
              <FaHeartbeat size={50} />
              <CountUp endValue={10000} />
              <h5> Lives Transformed</h5>
            </div>
            <div className="homepage-impact-item">
              <FaBuilding size={50} />
              <CountUp endValue={200} />
              <h5> Wells Constructed</h5>
            </div>
            <div className="homepage-impact-item">
              <FaHandsHelping size={50} />
              <CountUp endValue={1200} />
              <h5> Women Empowered</h5>
            </div>
            <div className="homepage-impact-item">
              <FaChalkboardTeacher size={50} />
              <CountUp endValue={500} />
              <h5> Students Educated</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;