import { act } from "react-dom/test-utils";
import { screen, waitFor } from "@testing-library/react";
import renderWithFeatures from "testing";
import { mockedSearchData } from "testing/mocks/mock-data";
import MovieFeatured from "./index";

describe("MovieFeatured tests", () => {
  const beforeEach = () => {
    return renderWithFeatures(<MovieFeatured />);
  };

  test("renders MovieFeatured field", async () => {
    await act(async () => {
      beforeEach();
    });
    const Poster = await waitFor(async () =>
      screen.findAllByAltText(/movie poster/i)
    );
    expect(Poster).toHaveLength(2);
    const Title = await waitFor(async () =>
      screen.findAllByText(mockedSearchData.Title)
    );
    expect(Title).toHaveLength(2);

    const Year = await waitFor(async () =>
      screen.findAllByText(mockedSearchData.Year)
    );
    expect(Year).toHaveLength(2);

    const Awards = await waitFor(async () =>
      screen.findAllByText(mockedSearchData.Awards)
    );
    expect(Awards).toHaveLength(2);

    const Plot = await waitFor(async () =>
      screen.findAllByText(mockedSearchData.Plot.slice(0, 200))
    );
    expect(Plot).toHaveLength(2);
  });
});
