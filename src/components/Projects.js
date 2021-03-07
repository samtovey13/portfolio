import React from "react";
import ProjectCard from "../styled/ProjectsCard";
import { ProjectGrid } from "../styled/GridWrappers";
import surrealEstateImg from "../images/surreal-estate/screenshot-sq.png";
import weatherImg from "../images/weather/weather.png";
import nasaImg from "../images/nasa/screenshot-sq.png";
import musicLibImg from "../images/music-library/screenshot.png";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <ProjectGrid className="projects-grid">
        <ProjectCard className="surreal-estate-card">
          <img
            src={surrealEstateImg}
            alt="Surreal Estate screenshot"
            width="100%"
          />
          <h3>Surreal Estate</h3>
          <p>React Property search website with API and Facebook SSO</p>
        </ProjectCard>
        <ProjectCard>
          <img
            src={weatherImg}
            alt="Umbrella Weather screenshot"
            width="100%"
          />
          <h3>Umbrella Weather</h3>
          <p>React weather app with live API</p>
        </ProjectCard>
        <ProjectCard>
          <img src={nasaImg} alt="NASA Search App screenshot" width="100%" />
          <h3>NASA Image Gallery</h3>
          <p>React app with image gallery</p>
        </ProjectCard>
        <ProjectCard>
          <img src={musicLibImg} alt="Music Library API screenshot" height="100%" />
          <h3>Music Library API</h3>
          <p>Artists, Songs and Albums</p>
        </ProjectCard>
      </ProjectGrid>
    </div>
  );
};

export default Projects;
