import React from "react";

const Resume = () => {
  return (
    <div className="bg-white py-24 sm:py-32 pt-36">
      <div className="mx-auto max-w-2xl sm:text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Resume
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 shadow-2xl sm:mt-10 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Professional Experience
            </h3>
            <br />
            <h4>
              The Collab Lab // April 2023 - Present
              <br />
              Collaborative Apprentice
            </h4>
            <p className="mt-6 text-base leading-7 text-gray-600">
              <ul>
                <li>
                  - Q2 2023 cohort working with a team of 3 other developers to
                  create an accessible React.js single page web application
                  connecting to a NoSQL Firebase cloud database
                </li>
                <li>
                  - Utilize GitHub for version control and implementing issues
                  in an Agile environment in one-week sprints
                </li>
                <li>
                  - Participate in pair programming, writing pull requests, and
                  doing code reviews
                </li>
              </ul>
            </p>
            <br />
            <br />
            <h4>
              Banker’s Healthcare Group / BHG Financial // February 2019 -
              February 2021
              <br />
              Product Manager
            </h4>
            <p className="mt-6 text-base leading-7 text-gray-600">
              <ul>
                <li>
                  - Managed project timelines and full development lifecycle,
                  gathered requirements, implemented technical and non-
                  technical innovative strategies, performed Quality Assurance
                  (QA) analysis, administered User Acceptance Testing (UAT), and
                  monitored progress of strategy and product launches
                </li>
                <li>
                  - Partnered with technical teams remotely in Florida and
                  Syracuse to ensure cohesive and fast-paced release management
                  and seamless connection to Loan Origination System API
                </li>
                <li>
                  - Standardized Agile best practices and automated JIRA scrum
                  board, created new documentation process for training
                </li>
              </ul>
            </p>
            <br />
            <h4>
              New York University // October 2010 - January 2019
              <br />
              Senior Business Analyst - Global Data Administration
            </h4>
            <p className="mt-6 text-base leading-7 text-gray-600">
              <ul>
                <li>
                  - Utilized Agile practices as project manager for implementing
                  four streamlined web-based student applications for NYU New
                  York, Abu Dhabi, and Shanghai within a three-month launch date
                  remotely and on-site
                </li>
                <li>
                  - Managed product roadmap, wrote user stories, and evaluated
                  business practices to improve service and operational
                  efficiencies in reporting and creating transactions en masse
                  using custom MS SQL Server scripts, SSIS packages and
                  third-party vendor software
                </li>
              </ul>
            </p>
          </div>
        </div>

        {/* next one */}

        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 shadow-2xl sm:mt-7 lg:mx-01 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Education
            </h3>
            <br />
            <h4>
              Flatiron School // November 2022
              <br />
              Software Engineering Bootcamp - Full Stack Web Development
            </h4>
            <br />
            <h4>
              New York University // May 2009
              <br />
              Bachelor of Arts - Economics and Journalism
            </h4>
            {/* <p className="mt-6 text-base leading-7 text-gray-600">
              <ul>
                <li>
                  - Q2 2023 cohort working with a team of 3 other developers to
                  create an accessible React.js single page web application
                  connecting to a NoSQL Firebase cloud database
                </li>
                <li>
                  - Utilize GitHub for version control and implementing issues
                  in an Agile environment in one-week sprints
                </li>
                <li>
                  - Participate in pair programming, writing pull requests, and
                  doing code reviews
                </li>
              </ul>
            </p> */}
            <br />
            <br />
          </div>
        </div>

        {/* resume jpeg*/}

        <br />
        <div className="mx-auto max-w-2xl text-center">
          <img src="https://github.com/katherineyuneman/portfolio/blob/master/public/Katherine%20Yuneman%20-%20Technical%20Resume.jpg?raw=true"></img>
        </div>
      </div>
    </div>
  );
};

export default Resume;
