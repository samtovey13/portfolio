import React, { useState } from "react";
import StyledContactForm from '../styled/ContactForm';
import {StyledPanel} from '../styled/Panel';
import emailjs from 'emailjs-com';
import StyledButton from "../styled/Button";
import StyledAnchor from "../styled/Anchor";
import {FaArrowUp, FaTelegramPlane} from 'react-icons/fa';

const Contact = () => {
  
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [fields, setFields] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const handleChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(false);
    setFail(false);
    emailjs
      .sendForm(
        "contact-service",
        "contact-form",
        event.target,
        "user_6ifIq0vO4Nx3KZmi56zJI"
      )
      .then(() => {
        setSuccess(true);
        setFields(initialState);
      }, (error) => {
        setFail(true);
      });
  }

  return (
    <StyledPanel className="contact" bg="#ffe66d">
      <div className="panel-inner">
        <h2>Contact</h2>
        <div className="alert">
          {success && <p className="success-message">Success! Message sent.</p>}
          {fail && <p className="fail-message">Error! Message not sent.</p>}
        </div>
        <StyledContactForm name="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">
            Name
            <input
              required
              type="text"
              name="name"
              value={fields.name}
              onChange={handleChange}
            ></input>
          </label>

          <label htmlFor="email">
            Email
            <input
              required
              type="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
            ></input>
          </label>

          <label htmlFor="message">
            Message
            <textarea
              required
              name="message"
              width="100%"
              rows="10"
              value={fields.message}
              onChange={handleChange}
            ></textarea>
          </label>

          <div className="contact-buttons">
            <StyledButton type="submit" className="contact-submit-button">
              Send
              <FaTelegramPlane />
            </StyledButton>
            <StyledAnchor href="#navbar" className="jump-to-top-anchor">
              Back to top
              <FaArrowUp />
            </StyledAnchor>
          </div>
        </StyledContactForm>
      </div>
    </StyledPanel>
  );
}

export default Contact;