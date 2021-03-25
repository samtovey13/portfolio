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
          <div className="modal-header">
            <button className="x-button" onClick={hideModal}>
              X
            </button>
          </div>

          <StyledPanel>
            <div className="panel-inner">
              <h1>{props.header}</h1>
              <p>{props.summary}</p>
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
