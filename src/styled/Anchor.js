import styled from 'styled-components';

const StyledAnchor = styled.a`
  margin-top: 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  border-radius: 30px;
  border: 2px solid white;
  text-decoration: none;
  text-align: center;

  svg {
    width: 20px;
    height: 20px;
    margin-left: 20px;
  }

  &:hover {
    background-color: grey;
  }
`;

export default StyledAnchor;