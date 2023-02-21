import React from "react";
import { NavLink } from "react-router-dom";
import ContentContainer from "./../../styles/ContentContainer";
import bug_error from "./bug_error.svg";
const ErrorPage = () => {
  return (
    <ContentContainer>
      <img src={bug_error} alt="error occured" style={{ height: "60%", width: "60%" }} />
      <h2>Something went wrong.</h2>
      <NavLink to="/">
        <button>Go back to home page</button>
      </NavLink>
    </ContentContainer>
  );
};

export default ErrorPage;
