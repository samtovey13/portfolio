import styled from "styled-components";

const StyledContactForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  max-width: 600px;
  margin: auto;

  input,
  label,
  textarea,
  button {
    font-size: 20px;
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
  }

  button {
    align-self: center;
    width: 100px;
  }
`;

export default StyledContactForm;
