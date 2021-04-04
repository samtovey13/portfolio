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
    width: 30px;
    height: 30px;
    margin-left: 10px;
  }
`;

export default StyledAnchor;