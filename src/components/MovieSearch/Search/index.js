import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchedTitle,
  setIsFullPlot,
  getMovies,
} from "store/searched-movies-slice";
import { SearchContainer } from "./styles";
import Checkbox from "common/components/Checkbox";

function Search() {
  const dispatch = useDispatch();
  const searchedTitle = useSelector(
    (state) => state.searchedMovies.searchedTitle
  );

  const isFullPlot = useSelector((state) => state.searchedMovies.isFullPlot);
  const titleChangeHandler = useCallback(
    (event) => {
      dispatch(setSearchedTitle(event.target.value));
    },
    [dispatch]
  );
  const fullPlotChangeHandler = useCallback(
    (event) => {
      dispatch(setIsFullPlot(event.target.checked));
    },
    [dispatch]
  );
  const onChangeHandler = useCallback(
    (event) => {
      event.preventDefault();
      if (!searchedTitle) return;
      dispatch(getMovies(searchedTitle, isFullPlot));
    },
    [dispatch, isFullPlot, searchedTitle]
  );
  return (
    <SearchContainer>
      <form id="searchMovies" onSubmit={onChangeHandler}>
        <Checkbox
          label="Full Plot"
          onCheckHandler={fullPlotChangeHandler}
          isChecked={isFullPlot}
        />
        <input
          type="text"
          id="searchTitle"
          name="searchTitle"
          value={searchedTitle}
          onChange={titleChangeHandler}
        />
        <button type="submit" form="searchMovies">
          Search
        </button>
      </form>
    </SearchContainer>
  );
}

export default React.memo(Search);
