import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  max-width: 100%;
  min-width: 320px;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.theme.colors.lightPrimary};
  margin: auto;
  overflow-y: scroll;
  @media (min-width: 600px) {
    width: 100%;
    align-items: start;
  }
`;

export const AppHeader = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: bold;
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  text-align: center;
  line-height: 5rem;
  color: ${(props) => props.theme.colors.primary};
  @media (min-width: 600px) {
    text-align: left;
  }
`;
