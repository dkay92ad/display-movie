import styled from "styled-components";
import ContentContainer from "common/styles/ContentContainer";

export const MovieDisplayContainer = styled(ContentContainer)`
  margin-bottom: 1rem;
  align-items: start;
  background: ${(props) => props.theme.colors.lightSecondary};
  img {
    width: 100%;
  }
  @media (min-width: 600px) {
    width: 47%;
    flex-direction: row;
    justify-content: start;
    margin: 1rem;
    img {
      object-fit: cover;
      height: 444px;
      width: 50%;
    }
  }
`;

export const MovieInfoContainer = styled.div`
  padding: 1rem;
  width: inherit;
  .others p {
    display: inline;
    overflow-wrap: break-word;
  }
  label {
    font-weight: bold;
    margin-right: 1rem;
  }
  p {
    margin: 0.5rem;
    &.title {
      color: ${(props) => props.theme.colors.primary};
      font-weight: bold;
      font-size: ${(props) => props.theme.fontSizes.medium};
    }
    &.plot {
      button.read-more {
        text-decoration: underline;
        color: ${(props) => props.theme.colors.blue};
        margin: 0 1rem;
        border: none;
        background: inherit;
        font-size: inherit;
        cursor: pointer;
      }
    }
  }
  div {
    &.actors,
    &.director,
    &.genre {
      ul {
        display: inline-flex;
        flex-wrap: wrap;
        li {
          border: 1px solid ${(props) => props.theme.colors.primary};
          width: fit-content;
          padding: 0.4rem;
          border-radius: 2rem;
          margin: 0.2rem 0.5rem;
        }
      }
    }
  }

  @media (min-width: 600px) {
  }
`;
