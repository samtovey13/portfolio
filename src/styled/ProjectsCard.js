import styled from "styled-components";

const ProjectCard = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 2px 4px 6px 2px #888888;

  > img {
    width: 100%;
    height: fit-content;
  }
`;

export default ProjectCard;
