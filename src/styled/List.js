import styled, {css} from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  > li {
    padding: 10px 0;

    > span {
      font-weight: 800;
    }
  }

  ${(props) =>
    props.columns &&
    css`
      display: flex;
      flex-flow: column nowrap;

      @media (min-width: 700px) {
        flex-flow: row nowrap;
        text-align: center;

        > li {
          margin-right: 60px;
          flex: 1 1 0;
          display: flex;
          flex-flow: column nowrap;

        }
      }
    `}
`;

export { StyledList };