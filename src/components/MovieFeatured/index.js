import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactLoading from "react-loading";
import { getMovieData } from "../../store/featured-movies-slice";
import { predefinedMovies } from "common/config";
import { theme } from "common/styles/globalStyles";
import ErrorPage from "common/components/ErrorPage";
import { MovieFeaturedContainer } from "./styles";
import MovieDisplay from "./../MovieDisplay";

let isInitial = true;

function MovieFeatured() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.featuredMovies.movies);
  const isLoading = useSelector((state) => state.featuredMovies.isLoading);
  const serverError = useSelector((state) => state.featuredMovies.error);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;

      predefinedMovies.forEach((imdbID) => {
        dispatch(getMovieData(imdbID));
      });
    }
  }, [dispatch]);

  if (isLoading)
    return (
      <ReactLoading
        type="spin"
        color={theme.colors.primary}
        height={"20%"}
        width={"20%"}
      />
    );
  else if (serverError) return <ErrorPage />;

  return (
    <MovieFeaturedContainer>
      {movies
        ? movies.map((movie) => {
            return <MovieDisplay key={movie.imdbID} movie={movie} />;
          })
        : null}
    </MovieFeaturedContainer>
  );
}

export default React.memo(MovieFeatured);
