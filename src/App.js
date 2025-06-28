
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import HomePage from './components/homepage/HomePage.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';
import ProjectPage from './components/ProjectPage/ProjectPage.jsx';
import AboutUs from './components/AboutUs/AboutUs.jsx';
import NavigationBar from './components/navigation/NavigationBar.jsx';

const App = () => {
  return (
    <>
      <NavigationBar /> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </>
  );
};
export default App;