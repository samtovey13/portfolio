import styled from "styled-components";

const StyledNavbar = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  padding: 20px 20px;

  h1 {
    text-align: center;
  }
  .socials-links {
    display: flex;
    flex-flow: row nowrap;
  }

  .socials-links a svg {
    height: 30px;
    width: 30px;
    color: grey;
    margin: 0 5px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    .socials-links a svg {
      height: 22px;
      width: 22px;
    }

    h1 {
      font-size: 34px;
      margin: 60px 0 40px 0;
    }
  }
  @media (max-width: 500px) {
    min-height: 50vh;
    justify-content: flex-end;
  }
`;

export default StyledNavbar;
