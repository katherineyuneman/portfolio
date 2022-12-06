import React from 'react'
import { LeftHeader } from '../styled-components/styleIndex'

const Projects = () => {
  return (
      <LeftHeader>
        <div className='right'>
            <div className='rightContentContainer'>
                <h2>Projects</h2>
                <h4 className='projectInfo'>
                    <a target='_blank' href='https://picky-baby.onrender.com/'>
                        Picky Baby Food & Recipe Database
                    </a>
                </h4>
                <p className='projectInfo'>
                    User-friendly food database for babies starting solid food.  View, add, and update recipes using these foods!
                    <br />React Frontend / Ruby on Rails Backend | <a target="_blank" href="https://github.com/katherineyuneman/picky-baby-recipes">GitHub Repository</a>
                </p>
                <div className='projectInfo'>
                <iframe
                    width="373"
                    height="210"
                    src="https://www.youtube.com/embed/FzK8tHM-nrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br/>
                <br />
                <h4 className='projectInfo'>
                    <a target='_blank' href='https://borrow-app-vtb8.onrender.com/'>
                        Borrow App
                    </a>
                </h4>
                <p className='projectInfo'>
                    Simulation of a book rental subscription app where user can create an account add books to a cart each month.
                    <br />React Frontend / Ruby on Rails Backend | <a target="_blank" href="https://github.com/katherineyuneman/capstone-borrow-app">GitHub Repository</a>
                </p>
                <div className='projectInfo'>
                <iframe
                    width="373"
                    height="210"
                    src="https://www.youtube.com/embed/j2VkN9igOA0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br/>
                <br />
                <h4 className='projectInfo'>
                    <a target='_blank' href='https://budget-tracker-k2k9.onrender.com//'>
                        Budget Tracker
                    </a>
                </h4>
                <p className='projectInfo'>
                Budget Tracker manages money by adding a new monthly budget limit, individual transactions and budget progress.
                    <br />React Frontend / Ruby on Rails Backend | <a target="_blank" href="https://github.com/katherineyuneman/budget-tracker-v2">GitHub Repository</a>
                </p>
                <div className='projectInfo'>
                <iframe
                    width="373"
                    height="210"
                    src="https://www.youtube.com/embed/ssHv3GT96CI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <br/>
                <br />
            </div>
        </div>
    </LeftHeader>
  )
}
export default Projects

