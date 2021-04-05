import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 200px;
  padding: 10px;
  font-size: 20px;
  font-weight: 700;
  color: white;
  background-color: #dd6e42;
  border-radius: 30px;
  border: 2px solid white;
  text-decoration: none;
  box-shadow: 2px 3px 5px 6px #ccc;
  text-align: center;
  font-family: "Khula", sans-serif;

  svg {
    width: 20px;
    height: 20px;
    margin-left: 20px;
  }

  &:hover {
    background-color: grey;
    cursor: pointer;
  }
`;

export default StyledButton