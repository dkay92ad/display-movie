import React from "react";
import PropTypes from "prop-types";
import { MovieDisplayContainer } from "./styles";

function MovieDisplay({ movie: { Poster, Title, Type, Year } }) {
  return (
    <MovieDisplayContainer>
      <div>
        <img src={Poster} alt="movie poster" />
        <p>{`${Title}(${Year})`}</p>
        <p>{Type}</p>
      </div>
    </MovieDisplayContainer>
  );
}

MovieDisplay.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default React.memo(MovieDisplay);
