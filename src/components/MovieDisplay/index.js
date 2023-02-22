import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { MovieDisplayContainer, MovieInfoContainer } from "./styles";

function MovieDisplay({
  movie: {
    Poster,
    Title,
    Released,
    Type,
    Year,
    Rated,
    Genre,
    Director,
    Actors,
    Plot,
    Awards,
  },
  isFrom,
}) {
  const [isReadMore, setIsReadMore] = useState(false);

  const stringToList = useCallback((string) => {
    if (!string) return [];
    let list = string.split(",");
    return (
      <ul>
        {list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }, []);

  const readMore = useCallback(
    (plot) => {
      return (
        plot?.length > 200 && (
          <button
            className="read-more"
            onClick={() => setIsReadMore((prevState) => !prevState)}
          >
            {isReadMore ? "read less" : "read more"}
          </button>
        )
      );
    },
    [isReadMore]
  );

  const renderPlot = useCallback(
    (showString, plot) => (
      <span>
        {showString}
        {readMore(plot)}
      </span>
    ),
    [readMore]
  );

  const renderConditionalPlot = useCallback(
    (plot) => {
      let showString = plot;
      if (!isReadMore && showString?.length > 200) {
        showString = showString.slice(0, 200);
        return renderPlot(showString, plot);
      }
      return renderPlot(showString, plot);
    },
    [renderPlot, isReadMore]
  );

  const isFeatured = isFrom === "Featured";
  const isSearch = isFrom === "Search";

  return (
    <MovieDisplayContainer>
      <img src={Poster} alt="movie poster" />
      <MovieInfoContainer>
        <p className="title">{isFeatured ? Title : `${Title} (${Released})`}</p>
        <div className="others">
          <p className="year">
            <label>Year:</label>
            {Year || "-"}
          </p>
          <p className="awards">
            <label>Awards:</label>
            {Awards || "-"}
          </p>
          {isSearch ? (
            <>
              <p className="type">
                <label>Type:</label>
                {Type || "-"}
              </p>

              <p className="rated">
                <label>Rated:</label>
                {Rated || "-"}
              </p>
              <div className="genre">
                <label>Genre:</label>
                {stringToList(Genre)}
              </div>
              <div className="director">
                <label>Director:</label>
                {stringToList(Director)}
              </div>
              <div className="actors">
                <label>Actors:</label>
                {stringToList(Actors)}
              </div>
            </>
          ) : null}
        </div>

        <p className="plot">
          <label>Plot:</label>
          {renderConditionalPlot(Plot)}
        </p>
      </MovieInfoContainer>
    </MovieDisplayContainer>
  );
}

MovieDisplay.propTypes = {
  movie: PropTypes.object.isRequired,
  isFrom: PropTypes.string.isRequired,
};

export default React.memo(MovieDisplay);
