import styled from "styled-components";

const StyledFlexContainerHorizontal = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: -10px;

  > span {
    margin: 10px;
    flex: 1 1 0px;
  }
`;

export { StyledFlexContainerHorizontal };
