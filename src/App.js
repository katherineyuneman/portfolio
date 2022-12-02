import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { LeftHeader } from './styled-components/styleIndex';

class App extends Component {
  render() {
    return (
      
        <LeftHeader>
          <div className='staticLeft'>
            <img className="rightSideUp" src="https://github.com/katherineyuneman/project0yuneman/blob/main/images/yuneman.jpg?raw=true" alt="katherine" />
            <img className="upsideDown" src="https://github.com/katherineyuneman/project0yuneman/blob/main/images/yunemanupsidedown.jpg?raw=true" alt="katherine" />
      <br/>
            Katherine
      <div className='right'>
        Yuneman
      </div>
          

        </div>
        </LeftHeader>
      
    );
  }
}

export default App;
