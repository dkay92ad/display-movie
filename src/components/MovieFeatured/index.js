import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "store/featured-movies-slice";
import ErrorPage from "common/components/ErrorPage";
import { MovieFeaturedContainer } from "./styles";
import MovieDisplay from "./../MovieDisplay";
import Loading from "common/components/Loading";

let isInitial = true;

function MovieFeatured() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.featuredMovies.movies);
  const isLoading = useSelector((state) => state.featuredMovies.isLoading);
  const serverError = useSelector((state) => state.featuredMovies.error);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      dispatch(getMovies());
    }
  }, [dispatch]);

  if (isLoading) return <Loading />;
  else if (serverError) return <ErrorPage />;

  return (
    <MovieFeaturedContainer>
      {movies
        ? movies.map((movie) => {
            return (
              <MovieDisplay
                key={movie.imdbID}
                movie={movie}
                isFrom="Featured"
              />
            );
          })
        : null}
    </MovieFeaturedContainer>
  );
}

export default React.memo(MovieFeatured);
