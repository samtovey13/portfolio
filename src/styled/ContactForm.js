import styled from "styled-components";

const StyledContactForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  max-width: 600px;
  margin: auto;

  input,
  label,
  textarea {
    font-size: 20px;
    border: none;
  }

  label {
    margin: 0;
    padding: 5px 0;
  }

  input,
  textarea {
    margin-bottom: 20px;
    padding: 4px;
    border-radius: 0;
    &:focus {
      outline-color: #dd6e42;
    }
  }

  .contact-buttons {
    margin-top: 50px;
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
  }

  .contact-submit-button,
  .jump-to-top-anchor {
    margin: 10px;
    padding: 10px;
    box-shadow: none;
    flex: 1 0 200px;
  }

  .jump-to-top-anchor {
    color: #dd6e42;
    background-color: white;
    border-color: #dd6e42;

    &:hover {
      background-color: #eaeaea;
    }
  }
`;

export default StyledContactForm;
