import React from "react";
import ReactLoading from "react-loading";
import { theme } from "common/styles/globalStyles";
import ErrorPage from "common/components/ErrorPage";
import { MovieTitleContainer } from "./styles";
import MovieDisplay from "../../MovieDisplay";
import { useSelector } from "react-redux";

function MovieTitles() {
  const movies = useSelector((state) => state.searchedMovies.movies);
  const isLoading = useSelector((state) => state.searchedMovies.isLoading);
  const serverError = useSelector((state) => state.searchedMovies.error);

  if (isLoading)
    return (
      <ReactLoading
        type="spin"
        color={theme.colors.primary}
        height={"20%"}
        width={"20%"}
      />
    );
  else if (serverError) <ErrorPage />;

  return (
    <MovieTitleContainer>
      {movies?.length
        ? movies.map((movie) => {
            return <MovieDisplay key={movie.imdbID} movie={movie} />;
          })
        : null}
    </MovieTitleContainer>
  );
}

export default React.memo(MovieTitles);
