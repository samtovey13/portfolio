import styled from "styled-components";

const StyledProjectCard = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  width: 100%;
  box-sizing: border-box;
  box-shadow: 2px 4px 6px 2px #888888;
  position: relative;

  img {
    max-width: 100%;
    height: auto;
    margin: 0;
    display: block;
    box-sizing: border-box;
  }

  .img-wrapper {
    position: relative;
    box-sizing: border-box;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        rgba(255, 255, 255, 0.4),
        rgba(0, 0, 0, 1)
      );
      z-index: 100;
    }
  }

  h3 {
    margin: 10px 10px 0 10px;
  }

  p {
    margin: 0 10px 10px 10px;
  }
`;

export default StyledProjectCard;
