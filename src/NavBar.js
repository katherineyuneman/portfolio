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
                About
                </li>
                <li>
                Projects
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
