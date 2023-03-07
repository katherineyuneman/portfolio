import React from 'react'
// import { NewContainer } from '../styled-components/styleIndex'

const Projects = () => {

    const projects = [
        {
            name: 'Picky Baby Food & Recipe Database',
            href:'https://picky-baby.onrender.com/',
            details: 'User-friendly food database for babies starting solid food.  View, add, and update recipes using these foods!',
            frameworks:['Javascript', 'React', 'Ruby', 'Ruby on Rails', 'PostgreSQL'],
            github: 'https://github.com/katherineyuneman/picky-baby-recipes',
            youtube: 'https://www.youtube.com/embed/FzK8tHM-nrA'

        },
        {
            name: 'Borrow App',
            href:'https://borrow-app-vtb8.onrender.com/',
            details: 'Simulation of a book rental subscription app where user can create an account add books to a cart each month.',
            frameworks:['Javascript', 'React', 'Ruby', 'Ruby on Rails', 'PostgreSQL', 'Redux'],
            github: 'https://github.com/katherineyuneman/capstone-borrow-app',
            youtube: 'https://www.youtube.com/embed/j2VkN9igOA0'
        },
        {
            name: 'Budget Tracker',
            href:'https://budget-tracker-k2k9.onrender.com/',
            details: 'Budget Tracker manages money by adding a new monthly budget limit, individual transactions and budget progress.',
            frameworks:['Javascript', 'React', 'Ruby', 'Ruby on Rails', 'PostgreSQL'],
            github: 'https://github.com/katherineyuneman/budget-tracker-v2',
            youtube: 'https://www.youtube.com/embed/ssHv3GT96CI'
        },
    ]

    const eachProject =
        projects.map((project => {
            return (
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                    <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </a>
                </div>
                </div>
            )
        }))
  return (
            
    <div className="bg-white py-24 sm:py-32">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl sm:text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Single Page Web Applications</h2>
      </div>
      <br/>

      
{/*         
            <a href="#">
            <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
            </a> */}
     
           
            <div className="grid grid-rows-4 grid-flow-col gap-4 p-5 flex flex-wrap flex-row">
            {eachProject}
            </div>
            </div>


        </div>

     
     
  )
}
export default Projects

