import React from "react";
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
    header: "Surreal Estate",
    summary: "React Property search app with API and Facebook SSO",
    image: surrealEstateImg,
  },
  {
    header: "Umbrella Weather",
    summary: "React weather app with live API",
    image: weatherImg,
  },
  {
    header: "Nasa Image Search",
    summary: "React app with image gallery",
    image: nasaImg,
  },
  {
    header: "Music Library API",
    summary: "Artists, Songs and Albums",
    image: musicLibImg,
  },
  {
    header: "Book Library API",
    summary: "Readers, Books and Genres",
    image: bookLibImg,
  },
  {
    header: "Cruise Ships",
    summary: "Vanilla JavaScript app with retro UI",
    image: cruiseShipsImg,
  },
];

const ProjectCard = ({props}) => {
  return (
    <>
      <div className="img-wrapper">
        <img
          src={props.image}
          alt={props.header + " screenshot"}
          width="100%"
        />
      </div>
      <div>
        <h3>{props.header}</h3>
        <p>{props.summary}</p>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <StyledPanel className="projects" bg="#EAEAEA">
      <div className="panel-inner">
        <h2>Projects</h2>
        <ProjectGrid className="projects-grid">
          {projects.map((project) => {
            return (
              <StyledProjectCard>
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
