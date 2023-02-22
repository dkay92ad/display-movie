import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import ContentContainer from "common/styles/ContentContainer";
import { routes } from "common/config";
import { resetSearchedMovies } from "store/searched-movies-slice";
import { resetFeaturedMovies } from "store/featured-movies-slice";
import bug_error from "./bug_error.svg";

const ErrorPage = () => {
  const dispatch = useDispatch();
  const clearError = () => {
    dispatch(resetSearchedMovies());
    dispatch(resetFeaturedMovies());
  };
  return (
    <ContentContainer>
      <img
        src={bug_error}
        alt="error occured"
        style={{ height: "60%", width: "60%" }}
      />
      <h2>Something went wrong.</h2>
      <NavLink to={routes.HOME}>
        <button onClick={clearError}>Go back to home page</button>
      </NavLink>
    </ContentContainer>
  );
};

export default ErrorPage;
