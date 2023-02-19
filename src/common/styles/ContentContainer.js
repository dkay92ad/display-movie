import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  width: 100%;
  background: ${(props) => props.theme.colors.lightPrimary};
  padding: 1rem;
`;

export default ContentContainer;
