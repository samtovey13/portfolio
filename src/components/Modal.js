import React from "react";
import StyledModal from "../styled/Modal";


const Modal = ({ props, hideModal, isOpen }) => {

  return (
    isOpen && (
      <StyledModal>
        <div className="modal-overlay">
          <div className="modal-container">
            <div>{props.header}</div>
            <button onClick={hideModal}>Hide</button>
          </div>
        </div>
      </StyledModal>
    )
  );
};

export default Modal;
