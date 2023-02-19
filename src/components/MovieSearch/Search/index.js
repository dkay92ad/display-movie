import React from "react";
import PropTypes from "prop-types";
import { SearchContainer } from "./styles";

function MovieSearch({ searchInputRef, onChangeHandler }) {
  return (
    <SearchContainer>
      <form onSubmit={onChangeHandler}>
        <label htmlFor="searchTitle">Search Title</label>
        <input type="text" name="searchTitle" ref={searchInputRef} />
      </form>
    </SearchContainer>
  );
}

MovieSearch.propTypes = {
  searchInputRef: PropTypes.object.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

export default React.memo(MovieSearch);
