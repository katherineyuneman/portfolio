import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { LeftHeader } from './styled-components/styleIndex';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import {NewContainer} from './styled-components/styleIndex'

class App extends Component {
  render() {
    return (
      <>
      <NewContainer>
      <NavBar/>
        {/* <LeftHeader> */}
        
          <div className='staticLeft'>
            {/* <img className="rightSideUp" src="https://github.com/katherineyuneman/project0yuneman/blob/main/images/yuneman.jpg?raw=true" alt="katherine" /> */}
            {/* <img className="upsideDown" src="https://github.com/katherineyuneman/project0yuneman/blob/main/images/yunemanupsidedown.jpg?raw=true" alt="katherine" /> */}
          <br/>
            <div className='namePosition'>
       
            </div>
          
            <div className='right'>
              <div className='rightContentContainer'>
                {/* <h2>Hi, I'm Katherine and I'm a Software Engineer.</h2> */}
              </div>
            </div>
          </div>
         
          </NewContainer>
          {/* </LeftHeader> */}
 
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
}

export default App;
