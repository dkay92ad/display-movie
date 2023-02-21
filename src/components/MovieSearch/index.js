import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import {
  getMovies,
  resetSearchedMovies,
  setSearchedTitle,
} from "../../store/searched-movies-slice";
import Search from "./Search";
import MovieTitles from "./MovieTitles";
import { MovieSearchContainer } from "./styles";

function MovieSearch() {
  const dispatch = useDispatch();
  const searchInputRef = useRef();
  const searchCheckboxRef = useRef();

  const onChangeHandler = useCallback(
    (event) => {
      event.preventDefault();
      const title = searchInputRef.current.value;
      const isFullPlot = searchCheckboxRef.current.checked;
      if (!title) return;
      dispatch(setSearchedTitle(title));
      dispatch(resetSearchedMovies());
      dispatch(getMovies(title, isFullPlot));
      // searchInputRef.current.value = "";
    },
    [dispatch]
  );

  return (
    <MovieSearchContainer>
      <Search
        searchInputRef={searchInputRef}
        onChangeHandler={onChangeHandler}
        searchCheckboxRef={searchCheckboxRef}
      />

      <MovieTitles />
    </MovieSearchContainer>
  );
}

export default MovieSearch;
