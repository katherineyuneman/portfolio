import React from 'react'
import { NewContainer } from '../styled-components/styleIndex'

const AboutMe = () => {
  return (
    <div>
        <NewContainer>
            <div className='body'>
                <div className='rightContentContainer'>
                    <h2>Hi, I'm Katherine and I'm a Software Engineer.</h2>
                    <p>
                        I recently graduated from the <a target="_blank" href="https://flatironschool.com/about-us/">Flatiron School</a> and am experienced in Ruby on Rails and JavaScript based programming.
                    </p>
                    <p>
                        I have a strong background in Product and Business Analytics.
                    </p>
                    <p>
                        I possess strong skills in cross-functional collaboration and problem solving that help teams of any size work efficiently.
                        I have a passion for tinkering with problems and testing to develop functional products from start to finish.
                    </p>
                </div>
            </div>

        </ NewContainer>
      
    </div>
  )
}

export default AboutMe
