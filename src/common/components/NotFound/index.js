import React from "react";
import { NavLink } from "react-router-dom";
import ContentContainer from "common/styles/ContentContainer";
import notFound from "./notFound.svg";
import { routes } from "common/config";

const NotFound = () => {
  return (
    <ContentContainer>
      <img
        src={notFound}
        alt="page not found"
        style={{ height: "75%", width: "100%" }}
      />
      <h2>Not Found</h2>
      <NavLink to={routes.HOME}>
        <button>Go back to home page</button>
      </NavLink>
    </ContentContainer>
  );
};

export default NotFound;
