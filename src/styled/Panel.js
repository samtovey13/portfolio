import styled from 'styled-components';

const StyledPanel = styled.div`
  width: 100%;
  padding: 60px 0;
  background-color: ${(props) => props.bg};
  display: grid;
  grid-template-columns: 1fr minmax(auto, 900px) 1fr;

  .panel-inner {
    grid-column: 2;
    color: ${(props) => props.col};
    margin: 0;
    padding: 40px;
  }
`;

export default StyledPanel;