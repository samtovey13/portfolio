import React from "react";
import ProjectCard from './ProjectCard';
import StyledProjectCard from "../styled/ProjectCard";
import { ProjectGrid } from "../styled/GridWrappers";
import {StyledPanel} from "../styled/Panel";

import projects from "../static/projects";

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
