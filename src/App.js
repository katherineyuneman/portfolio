import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LeftHeader } from './styled-components/styleIndex';
import NavBar from './NavBar';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';


class App extends Component {
  render() {
    return (
      <>
        <LeftHeader>
          <div className='staticLeft'>
            <img className="rightSideUp" src="https://github.com/katherineyuneman/project0yuneman/blob/main/images/yuneman.jpg?raw=true" alt="katherine" />
            <img className="upsideDown" src="https://github.com/katherineyuneman/project0yuneman/blob/main/images/yunemanupsidedown.jpg?raw=true" alt="katherine" />
          <br/>
            <div className='namePosition'>
            <span className="white">
                Katherine  </span>
                <span className="black"> Yuneman</span>
       
            </div>
          <NavBar/>
            <div className='right'>
            </div>
          </div>
        </LeftHeader>
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
        </Routes>
        <Routes>
          <Route path="/projects" element={<Projects />} />
        </Routes>
        </>
    );
  }
}

export default App;
