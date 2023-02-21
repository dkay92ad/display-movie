import { screen } from "@testing-library/react";
import renderWithFeatures from "testing";
import MovieSearch from "./Search/index";

describe("MovieSearch tests", () => {
  test("renders MovieSearch", () => {
    renderWithFeatures(<MovieSearch />);
    const inputField = document.querySelector('input[name="searchTitle"]');
    console.log(inputField);
  });
});
