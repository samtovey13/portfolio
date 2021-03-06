import styled, {css} from 'styled-components';

const StyledPanel = styled.div`
  width: 100%;
  padding: 60px 0;
  background-color: ${(props) => props.bg};
  background-image: ${(props) =>
    props.bgImg ? `url(${props.bgImg})` : "none"};
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr minmax(150px, 900px) 1fr;
  height: calc(100% - 180px);
  overflow-y: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) =>
      props.bgImg ? `rgba(255, 238, 147, 0.9)` : "none"};
  }

  .panel-inner {
    z-index: 10;
    grid-column: 2;
    color: ${(props) => props.col};
    margin: 0;
    padding: 40px;

    @media (min-width: 768px) {
      ${(props) =>
        props.columns &&
        css`
          display: flex;
          flex-flow: row-reverse;
          align-items: center;
          .content-wrapper {
            padding-right: 40px;
          }
        `};
    }
  }

  .first-p {
    font-weight: 800;
    font-size: 18px;
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

const StyledModalPanel = styled(StyledPanel)`
  padding: 0;
  height: auto;
  width: 100%;
  .panel-inner {
    padding: 20px;
  }
  img {
    border: 1px solid grey;
    border-radius: 20px;
    display: block;
    margin: 40px auto;
    max-width: 100%;
  }

  .modal-panel-header {
    text-align: center;
  }

  h1 {
    margin: 0;
    padding-top: 40px;
  }
  h2 {
    margin: 40px 0 10px 0;
    font-size: 22px;
  }
  .project-direct-links {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: stretch;
    gap: 40px;
    margin: 60px 0;

    svg {
      width: 40px;
      height: 40px;
      margin-right: 20px;
    }
  }
`;

export {StyledPanel, StyledModalPanel} ;