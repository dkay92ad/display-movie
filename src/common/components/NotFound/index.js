import React from "react";
import { NavLink } from "react-router-dom";
import ContentContainer from "./../../styles/ContentContainer";
import notFound from "./notFound.svg";
const NotFound = () => {
  return (
    <ContentContainer>
      <img src={notFound} alt="page not found" style={{ height: "75%", width: "100%" }} />
      <h2>Not Found</h2>
      <NavLink to="/">
        <button>Go back to home page</button>
      </NavLink>
    </ContentContainer>
  );
};

export default NotFound;
