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
      outline-color: #DD6E42;
    }
  }

  .contact-submit-button {
    align-self: center;
    margin-top: 20px;
  }
`;

export default StyledContactForm;
