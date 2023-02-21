import React from "react";
import Loading from "common/components/Loading";
import ErrorPage from "common/components/ErrorPage";
import { MovieTitleContainer } from "./styles";
import MovieDisplay from "../../MovieDisplay";
import { useSelector } from "react-redux";

function MovieTitles() {
  const movies = useSelector((state) => state.searchedMovies.movies);
  const isLoading = useSelector((state) => state.searchedMovies.isLoading);
  const serverError = useSelector((state) => state.searchedMovies.error);

  if (isLoading) return <Loading />;
  else if (serverError) return <ErrorPage />;

  return (
    <MovieTitleContainer>
      {movies?.length
        ? movies.map((movie) => {
            return (
              <MovieDisplay key={movie.imdbID} movie={movie} isFrom="Search" />
            );
          })
        : null}
    </MovieTitleContainer>
  );
}

export default React.memo(MovieTitles);
