import React, { useEffect } from "react";
import StyledModal from "../styled/Modal";


const Modal = ({ props, hideModal, isOpen }) => {

  const handleKeyUp = (e) => {
    if (e.key === "Escape") {
      hideModal(e);
    }
  };

  useEffect(() => {
    document.getElementById("modal").focus();
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <StyledModal id="modal" onKeyUp={handleKeyUp} tabIndex={-1}>
      <div className="modal-overlay">
        <div className="modal-container">
          <div>{props.header}</div>
          <input type="text" onKeyUp={handleKeyUp} />
          <button onClick={hideModal}>Hide</button>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
