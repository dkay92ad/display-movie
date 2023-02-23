import { screen } from "@testing-library/react";
import renderWithFeatures from "testing";
import { mockedSearchData } from "testing/mocks/mock-data";
import MovieDisplay from "./index";

describe("MovieDisplay tests", () => {
  const beforeEach = (props) => {
    return renderWithFeatures(<MovieDisplay {...props} />);
  };

  test("renders MovieDisplay field", async () => {
    const props = {
      movie: mockedSearchData,
      isFrom: "Search",
    };
    beforeEach(props);
    screen.debug();
    const Poster = screen.getByAltText(/movie poster/i);
    expect(Poster).toBeInTheDocument();
    const Title = screen.getByText(
      `${mockedSearchData.Title} (${mockedSearchData.Released})`
    );
    expect(Title).toBeInTheDocument();

    const Type = screen.getByText(mockedSearchData.Type);
    expect(Type).toBeInTheDocument();
    const Year = screen.getByText(mockedSearchData.Year);
    expect(Year).toBeInTheDocument();
    const Rated = screen.getByText(mockedSearchData.Rated);
    expect(Rated).toBeInTheDocument();
    const Plot = screen.getByText(mockedSearchData.Plot.slice(0, 200));
    expect(Plot).toBeInTheDocument();
    const Awards = screen.getByText(mockedSearchData.Awards);
    expect(Awards).toBeInTheDocument();
    const Genre = screen.getByText("Genre:");
    expect(Genre).toBeInTheDocument();
    const genreList = document.querySelectorAll(".genre ul li");
    expect(genreList).toHaveLength(mockedSearchData.Genre.split(",").length);
    const Director = screen.getByText("Director:");
    expect(Director).toBeInTheDocument();
    const directoractorsList = document.querySelectorAll(".director ul li");
    expect(directoractorsList).toHaveLength(
      mockedSearchData.Director.split(",").length
    );
    const Actors = screen.getByText("Actors:");
    expect(Actors).toBeInTheDocument();
    const actorsList = document.querySelectorAll(".actors ul li");
    expect(actorsList).toHaveLength(mockedSearchData.Actors.split(",").length);
  });
});
