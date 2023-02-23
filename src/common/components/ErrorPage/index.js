import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import ContentContainer from "common/styles/ContentContainer";
import { routes } from "common/config";
import { resetSearchedMovies } from "store/searched-movies-slice";
import { resetFeaturedMovies } from "store/featured-movies-slice";
import bug_error from "./bug_error.svg";

const ErrorPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const isSearchPage = pathname === routes.HOME || pathname === routes.SEARCH;
  const isFeaturedPage = pathname === routes.FEATURED;
  const clearError = () => {
    if (isSearchPage) dispatch(resetSearchedMovies());
    if (isFeaturedPage) dispatch(resetFeaturedMovies());
  };
  return (
    <ContentContainer>
      <img
        src={bug_error}
        alt="error occured"
        style={{ height: "60%", width: "60%" }}
      />
      <h2>Something went wrong.</h2>
      <button onClick={clearError}>
        <NavLink to={routes.HOME}>Go back to home page</NavLink>
      </button>
    </ContentContainer>
  );
};

export default ErrorPage;
