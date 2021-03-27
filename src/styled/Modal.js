import styled from "styled-components";

const StyledModal = styled.div`
  .modal-overlay {
    position: fixed;
    display: block;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
  }

  .modal-wrapper {
    position: fixed;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
  }

  .modal-container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    position: relative;
    margin: auto;
    max-width: 1000px;
    height: calc(100% - 20px);
    background-color: #ffffff;
    border-radius: 8px;
    z-index: 101;

    .modal-header,
    .modal-footer {
      width: 100%;
    }

    .x-button {
      border: none;
      background-color: inherit;
      display: block;
      float: right;
      margin: 16px;
      font-size: 24px;
      color: grey;
    }
    .hide-button {
      display: block;
      margin: 16px auto;
    }
  }
`;

export default StyledModal;
