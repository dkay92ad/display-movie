import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  max-width: 100%;
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.colors.primary};
  border: none;
  form {
    display: flex;
    justify-content: space-between;
    width: 90%;
    label {
      line-height: 2.5rem;
      color: ${(props) => props.theme.colors.white};
    }
    input {
      padding: 0.5rem;
      &:focus {
        outline: ${(props) => props.theme.colors.golden} auto 1px;
      }
    }
  }
  @media (min-width: 600px) {
    form {
      justify-content: end;
      width: 100%;
      label {
        margin-right: 1rem;
      }
    }
  }
`;
