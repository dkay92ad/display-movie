import React, { useCallback, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { getMovies, resetSearchedMovies } from "../../store/searched-movies-slice";
import Search from "./Search";
import MovieTitles from "./MovieTitles";
import { MovieSearchContainer } from "./styles";

function MovieSearch() {
  const dispatch = useDispatch();
  const [searchedInput, setSearchedInput] = useState("");
  const searchInputRef = useRef();

  const onChangeHandler = useCallback(
    (event) => {
      event.preventDefault();
      const title = searchInputRef.current.value;
      if (!title) return;
      setSearchedInput(title);
      dispatch(resetSearchedMovies());
      dispatch(getMovies(title));
      searchInputRef.current.value = "";
    },
    [dispatch]
  );

  return (
    <MovieSearchContainer>
      <Search
        searchInputRef={searchInputRef}
        onChangeHandler={onChangeHandler}
      />

      <MovieTitles searchedTitle={searchedInput} />
    </MovieSearchContainer>
  );
}

export default MovieSearch;
