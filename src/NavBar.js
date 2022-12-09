import React from 'react'
// import { LeftHeader } from './styled-components/styleIndex'
import { Link } from 'react-router-dom'
import { NewContainer } from './styled-components/styleIndex'

const NavBar = () => {
  return (
    <div>
      <NewContainer>
      <section class="navigation">
        <div className='container'>
          <div className='brand'>
           <span>
            <img className="rightSideUp" src="https://github.com/katherineyuneman/project0yuneman/blob/main/images/yuneman.jpg?raw=true" alt="katherine" />
            < br/>
            <h3>Katherine Yuneman</h3>
            </span>
          </div>
          <nav>
            <div class="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
              <ul className='nav-list'>
                <li>
                <Link to="/aboutme">About</Link>
                </li>
                <li>
                <Link to="/projects">Projects</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
                </ul>
          </nav>
        </div>
      </section>

      </NewContainer>
    </div>
  )
}

export default NavBar
