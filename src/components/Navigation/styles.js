import styled from "styled-components";
import ContentContainer from "common/styles/ContentContainer";

export const NavigationContainer = styled(ContentContainer)`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  padding: 0;
  margin-bottom: 1rem;
  a {
    padding: 1rem;
    width: 100%;
    text-align: center;
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.primary};
    &.active-link {
      background: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.black};
      box-shadow: 0px -4px 0px 0px ${(props) => props.theme.colors.primary};
    }
    &:hover {
      background: ${(props) => props.theme.colors.golden};
      color: ${(props) => props.theme.colors.black};
    }
  }
`;
