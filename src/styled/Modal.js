import styled from "styled-components";

const StyledModal = styled.div`
  .modal-overlay {
    position: fixed;
    display: block;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
  }

  .modal-container {
    display: block;
    position: relative;
    padding: 20px;
    margin: 10px;
    height: calc(96% - 20px);
    background-color: #ffffff;
    border-radius: 8px;
    z-index: 101;
  }
`;

export default StyledModal;
