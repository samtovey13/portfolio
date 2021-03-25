import React, { useEffect } from "react";
import StyledModal from "../styled/Modal";
import StyledPanel from "../styled/Panel";


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
          <button className="x-button" onClick={hideModal}>
            X
          </button>
          <StyledPanel>
            <div className="panel-inner">
              <div>{props.header}</div>
              <img src={props.images.gif1} alt="some alt text" width="500px" />
              <button className="hide-button" onClick={hideModal}>
                Hide
              </button>
            </div>
          </StyledPanel>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
