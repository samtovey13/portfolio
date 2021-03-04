import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  > li {
    padding: 3px 0;

    > span {
      font-weight: 800;
    }
  }
`;

export { StyledList };