import React from "react";
import ProfileCard from "./GitHubProfile";
import ProjectCard from "./GitHubProject";

function MyWork() {
  return (
    <section className="my-work" id="work">
      <h2 className="section__title section__title--work">My Work</h2>
      <p className="section__subtitle section__subtitle--work">
        A selection of my projects
      </p>

      <div className="portfolio">
        <ProfileCard username="taloncjones" />
        <ProjectCard username="taloncjones" repo="Mini_TTV" />
        <ProjectCard username="taloncjones" repo="Pathfinding-Visualizer" />
        <ProjectCard username="taloncjones" repo="LinuxCatalog" />
        <ProjectCard username="taloncjones" repo="EAAccountCreator" />
        <ProjectCard username="taloncjones" repo="DiscordImageBot" />
      </div>
    </section>
  );
}

export default MyWork;
