// import React from 'react';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
// import {NewContainer} from './styled-components/styleIndex'
import NavBar from './NavBar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
    return (
      <>
      
      <NavBar/>

        <Routes>
          <Route path="/" element={<AboutMe />} />
        </Routes>
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
  
        </>
    );
  }


export default App;
