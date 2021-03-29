import React, { useState } from "react";
import Modal from "./Modal";

const ProjectCard = ({ props }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = "fixed";
  };

  const hideModal = (event) => {
    event.preventDefault();
    setIsOpen(false);
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  };

  return (
    <>
      <div
        className="modal-button"
        onClick={(e) => {
          showModal(e);
        }}
      >
        <div className="card-img-wrapper">
          <img
            className="card-img"
            src={props.images.square}
            alt={props.header + " screenshot"}
            width="100%"
          />
        </div>

        <div>
          <h3>{props.header}</h3>
          <p>{props.summary}</p>
        </div>
      </div>
      { 
        isOpen && <Modal
          props={props}
          hideModal={hideModal}
          isOpen={isOpen}
        /> 
      }
    </>
  );
};

export default ProjectCard;
