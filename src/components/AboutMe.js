import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid'

const skills = [
  'Javascript',
  'React.JS',
  'Ruby',
  'Ruby on Rails',
  'Agile Methodologies',
  'CSS'
]

const AboutMe = () => {
  return (
<>
    <div className="bg-white py-24 sm:py-32 pt-36">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hi, I'm Katherine Yuneman and I'm a Fullstack Developer.</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
        I recently graduated from the <a target="_blank" href="https://flatironschool.com/about-us/">Flatiron School</a> and am experienced in Ruby on Rails and JavaScript based programming.
        
        </p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 shadow-2xl sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
        <div className="p-8 sm:p-10 lg:flex-auto">
          <h3 className="text-2xl font-bold tracking-tight text-gray-900">About Me</h3>
          <p className="mt-6 text-base leading-7 text-gray-600">

                        I have a strong background in Product and Business Analytics.
                
                        I possess strong skills in cross-functional collaboration and problem solving that help teams of any size work efficiently.
                        I have a passion for tinkering with problems and testing to develop functional products from start to finish.
               </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Skills</h4>
            <div className="h-px flex-auto bg-gray-100" />
          </div>
          
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            {skills.map((skill) => (
              <li key={skill} className="flex gap-x-3">
                <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div className="rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
            <div className="mx-auto max-w-xs">
              {/* <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p> */}
              {/* <p className="mt-6 flex items-baseline justify-center gap-x-2"> */}
                {/* <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span> */}
                <img
                  className="h-auto w-auto rounded-2xl mt-6 flex items-baseline justify-center gap-x-2"
                  src="https://github.com/katherineyuneman/project0yuneman/blob/main/images/yuneman.jpg?raw=true"
                  alt="Katherine Yuneman"
                />
                {/* <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span> */}
              {/* </p> */}
              {/* <a
                href="#"
                className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get access
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}

export default AboutMe
