import React from 'react'
import { LeftHeader } from './styled-components/styleIndex'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <LeftHeader>
          <div className='staticLeft'>
            <nav>
                <li>
                <Link to="/aboutme">About</Link>
                </li>
                <li>
                <Link to="/projects">Projects</Link>
                </li>
                <li>
                Contact
                </li>
            </nav>
          </div>
      </LeftHeader>
    </div>
  )
}

export default NavBar
