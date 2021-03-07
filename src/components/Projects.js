import React from "react";
import ProjectCard from "../styled/ProjectsCard";
import { ProjectGrid } from "../styled/GridWrappers";
import surrealEstateImg from "../images/surreal-estate/screenshot-sq.png";
import weatherImg from "../images/weather/weather.png";
import nasaImg from "../images/nasa/screenshot-sq.png";
import musicLibImg from "../images/music-library/screenshot-sq.png";
import bookLibImg from "../images/book-library/screenshot-sq.png";
import cruiseShipsImg from "../images/cruise-ships/screenshot-sq.png";

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <ProjectGrid className="projects-grid">
        <ProjectCard className="surreal-estate-card">
          <div className="img-wrapper">
            <img
              src={surrealEstateImg}
              alt="Surreal Estate screenshot"
              width="100%"
            />
          </div>
          <h3>Surreal Estate</h3>
          <p>React Property search website with API and Facebook SSO</p>
        </ProjectCard>
        <ProjectCard>
          <div className="img-wrapper">
            <img
              src={weatherImg}
              alt="Umbrella Weather screenshot"
              width="100%"
            />
          </div>
          <h3>Umbrella Weather</h3>
          <p>React weather app with live API</p>
        </ProjectCard>
        <ProjectCard>
          <div className="img-wrapper">
            <img src={nasaImg} alt="NASA Search App screenshot" width="100%" />{" "}
          </div>
          <h3>NASA Image Gallery</h3>
          <p>React app with image gallery</p>
        </ProjectCard>
        <ProjectCard>
          <div className="img-wrapper">
            <img
              src={musicLibImg}
              alt="Music Library API screenshot"
              height="100%"
            />
          </div>
          <h3>Music Library API</h3>
          <p>Artists, Songs and Albums</p>
        </ProjectCard>
        <ProjectCard className="book-library-card">
          <div className="img-wrapper">
            <img
              src={bookLibImg}
              alt="Book Library API screenshot"
              height="100%"
            />
          </div>
          <h3>Book Library API</h3>
          <p>Readers, Books and Genres</p>
        </ProjectCard>
        <ProjectCard>
          <div className="img-wrapper">
            <img
              src={cruiseShipsImg}
              alt="Cruise Ships App screenshot"
              height="100%"
            />
          </div>
          <h3>Cruise Ships</h3>
          <p>Vanilla JavaScript app with retro UI</p>
        </ProjectCard>
      </ProjectGrid>
    </div>
  );
};

export default Projects;
