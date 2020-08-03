import React from "react";

function MySkills() {
  return (
    <section className="my-skills" id="skills">
      <h2 className="section__title section__title--skills">What I do</h2>
      <div className="skills">
        <div className="skill">
          <h3>Quality Assurance</h3>
          <ul className="skill_list">
            <li className="skill_item">
              Work with software architects during the concept phase to pinpoint
              potential problem areas before they occur
            </li>
            <li className="skill_item">
              Create and execute manual/automated test plans to ensure feature
              stability
            </li>
            <li className="skill_item">
              Work closely with developers to root cause and solve software and
              system issues
            </li>
            <li className="skill_item">
              Coordinate and lead group test efforts to guarantee product
              robustness
            </li>
          </ul>
        </div>

        <div className="skill">
          <h3>Software Development</h3>
          <ul className="skill_list">
            <li className="skill_item">
              Continuously study new technologies and computer science
              foundations
            </li>
            <li className="skill_item">
              Plan and develop personal projects to learn and reinforce learned
              languages, tools, and frameworks
            </li>
            <li className="skill_item">
              Debug and fix issues in personal projects and public github repos
            </li>
            <li className="skill_item">
              Collaborate on projects with other developers
            </li>
          </ul>
        </div>

        <div className="skill">
          <h3>Languages</h3>
          <p>Python, HTML, JavaScript, CSS, Bash</p>
          <h3>Frameworks/Tools</h3>
          <p>
            React, Flask, SQLAlchemy, MaterialUI, PostgreSQL, Git, Selenium,
            Tkinter
          </p>
          <h3>Misc.</h3>
          <p>REST, APIs, TCP/IP, JIRA, TestLink, Project Management, CI/CD</p>
        </div>
      </div>

      <a href="#work" className="btn">
        My Work
      </a>
    </section>
  );
}

export default MySkills;
