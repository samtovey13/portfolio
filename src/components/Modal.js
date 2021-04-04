import React, { useEffect } from "react";
import StyledModal from "../styled/Modal";
import { StyledModalPanel } from "../styled/Panel";
import { FaGithub } from 'react-icons/fa';
import { GiMouse } from 'react-icons/gi';
import StyledButton from "../styled/Button";

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
        <div className="modal-wrapper">
          <div className="modal-container">
            <div className="modal-header">
              <button className="x-button" onClick={hideModal}>
                X
              </button>
            </div>

            <StyledModalPanel className="modal-panel">
              <div className="panel-inner">
                <div className="modal-panel-header">
                  <h1>{props.header}</h1>
                  <p className="first-p">{props.summary}</p>
                </div>

                <div className="project-direct-links">
                  {props.links.liveSite ? (
                    <StyledButton className="live-site-button" href={props.links.liveSite}>
                      <GiMouse />
                      Live Site
                    </StyledButton>
                  ) : null}
                  {props.links.gitRepo ? (
                    <StyledButton className="git-repo-button" href={props.links.gitRepo}>
                      <FaGithub />
                      Git Repo
                    </StyledButton>
                  ) : null}
                </div>

                <h2>The Brief</h2>
                <p>{props.brief}</p>

                <h2>Tech</h2>
                <p>{props.tech}</p>

                <h2>Justification</h2>
                <p>{props.justification}</p>

                <img
                  src={props.images.gif1}
                  alt="some alt text"
                  width="500px"
                />

                <h2>Challenges</h2>
                <p>{props.challenges}</p>

                <h2>Reflection</h2>
                <p>{props.review}</p>
              </div>
            </StyledModalPanel>

            <div className="modal-footer">
              <StyledButton className="hide-button" onClick={hideModal}>
                Hide
              </StyledButton>
            </div>
          </div>
        </div>
      </div>
    </StyledModal>
  );
};

export default Modal;
