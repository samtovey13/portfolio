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

    .modal-header {
      position: absolute;
      top: 0;
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 0),
        rgba(255, 255, 255, 1)
      );
      border-radius: 8px;
    }
    .modal-footer {
      position: absolute;
      bottom: 0;
      height: 120px;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(255, 255, 255, 1)
      );
      border-radius: 8px;
    }

    .x-button {
      border: 2px solid lightgrey;
      border-radius: 8px;
      background-color: white;
      display: block;
      float: right;
      margin: 5px;
      padding: 5px 10px 2px 10px;
      font-size: 24px;
      color: grey;
      cursor: pointer;
    }
    .hide-button {
      display: block;
      margin: 50px auto 100px auto;
    }
  }
`;

export default StyledModal;
