import React from 'react';
import StyledContactForm from '../styled/ContactForm';
import StyledPanel from '../styled/Panel';

const Contact = () => {
  return (
    <StyledPanel className="contact">
      <h2>Contact</h2>
      <StyledContactForm
        name="contact-form"
      >
        <label for="name">Name</label>
        <input type="text" name="name"></input>

        <label for="email">Email</label>
        <input type="email" name="email"></input>

        <label for="message">Message</label>
        <textarea name="message" width="100%" rows="10"></textarea>

        <button type="submit" className="contact-submit-button">
          Send
        </button>
      </StyledContactForm>
    </StyledPanel>
  );
}

export default Contact;