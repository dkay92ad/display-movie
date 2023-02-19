import styled from "styled-components";
import ContentContainer from "common/styles/ContentContainer";

export const MovieDisplayContainer = styled(ContentContainer)`
  margin-bottom: 1rem;
  background: ${(props) => props.theme.colors.lightSecondary};
  @media (min-width: 600px) {
    img {
      object-fit: cover;
      height: 444px;
    }
  }
`;
