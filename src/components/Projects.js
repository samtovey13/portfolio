import React from "react";
import ProjectCard from './ProjectCard';
import StyledProjectCard from "../styled/ProjectCard";
import { ProjectGrid } from "../styled/GridWrappers";
import surrealEstateImg from "../images/surreal-estate/screenshot-sq.png";
import weatherImg from "../images/weather/weather.png";
import nasaImg from "../images/nasa/screenshot-sq.png";
import musicLibImg from "../images/music-library/screenshot-sq.png";
import bookLibImg from "../images/book-library/screenshot-sq.png";
import cruiseShipsImg from "../images/cruise-ships/screenshot-sq.png";
import StyledPanel from "../styled/Panel";

const projects = [
  {
    ref: "SurrealEstate",
    header: "Surreal Estate",
    summary: "React Property search app with API and Facebook SSO",
    image: surrealEstateImg,
  },
  {
    ref: "Weather",
    header: "Umbrella Weather",
    summary: "React weather app with live API",
    image: weatherImg,
  },
  {
    ref: "NASA",
    header: "Nasa Image Search",
    summary: "React app with image gallery",
    image: nasaImg,
  },
  {
    ref: "MusicLib",
    header: "Music Library API",
    summary: "Artists, Songs and Albums",
    image: musicLibImg,
  },
  {
    ref: "BookLib",
    header: "Book Library API",
    summary: "Readers, Books and Genres",
    image: bookLibImg,
  },
  {
    ref: "CruiseShips",
    header: "Cruise Ships",
    summary: "Vanilla JavaScript app with retro UI",
    image: cruiseShipsImg,
  },
];

const Projects = () => {
  return (
    <StyledPanel className="projects" bg="#EAEAEA">
      <div className="panel-inner">
        <h2>Projects</h2>
        <ProjectGrid className="projects-grid">
          {projects.map((project, index) => {
            return (
              <StyledProjectCard className="project-card" key={index}>
                <ProjectCard props={project} />
              </StyledProjectCard>
            );
          })}
        </ProjectGrid>
      </div>
    </StyledPanel>
  );
};

export default Projects;
