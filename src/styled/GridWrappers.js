import styled from "styled-components";

const ProjectGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: minmax(300px, auto);
  grid-gap: 40px;
`;

export { ProjectGrid };
