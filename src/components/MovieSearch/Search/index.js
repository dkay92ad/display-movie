import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchedTitle,
  setIsFullPlot,
} from "./../../../store/searched-movies-slice";
import { SearchContainer } from "./styles";
import Checkbox from "common/components/Checkbox";

function MovieSearch({ searchInputRef, onChangeHandler, searchCheckboxRef }) {
  const dispatch = useDispatch();
  const searchedTitle = useSelector(
    (state) => state.searchedMovies.searchedTitle
  );

  const isFullPlot = useSelector((state) => state.searchedMovies.isFullPlot);
  return (
    <SearchContainer>
      <form onSubmit={onChangeHandler}>
        <label htmlFor="searchTitle">Search</label>
        <input
          type="text"
          name="searchTitle"
          value={searchedTitle}
          ref={searchInputRef}
          onChange={(event) => {
            dispatch(setSearchedTitle(event.target.value));
          }}
        />
        <Checkbox
          label="Full"
          onCheckHandler={(event) => {
            dispatch(setIsFullPlot(event.target.checked));
          }}
          isDefaultChecked={isFullPlot}
          searchCheckboxRef={searchCheckboxRef}
        />
      </form>
    </SearchContainer>
  );
}

MovieSearch.propTypes = {
  searchInputRef: PropTypes.object.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default React.memo(MovieSearch);
