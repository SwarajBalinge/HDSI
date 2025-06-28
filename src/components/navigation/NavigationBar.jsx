import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <div style={{ backgroundColor: '#f8f9fa', fontFamily: 'Poppins, sans-serif' }}>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img
                src={require('../../Assest/HDSILOGO.jpg')}
                alt="Logo"
                width="80" 
                height="80" 
                className="d-inline-block align-text-top"
                style={{ 
                  marginRight: '10px',
                  borderRadius: '50%',        
                  objectFit: 'cover',        
                  border: '2px solid #f8f9fa',
                  boxShadow: '0 0 10px rgba(0,0,0,0.1)' 
                }} 
              />
            </Link>
            {/* NGO Name with Link */}
            <Link className="navbar-brand" to="/" style={{ fontSize: '1.1rem',  color: '#000' }}>
              HUMAN DEVELOPMENT SOCIETY OF INDIA
            </Link>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/* Using NavLink to manage active state */}
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  PROJECTS
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                 CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
