import { createRef } from "react";
import { screen, userEvent } from "@testing-library/react";
import renderWithFeatures from "testing";
import MovieSearch from "./Search/index";

describe("MovieSearch tests", () => {
  const ref = createRef();
  const onChangeHandler = jest.fn();

  test("renders MovieSearch", () => {
    renderWithFeatures(
      <MovieSearch searchInputRef={ref} onChangeHandler={onChangeHandler} />
    );
    const searchForm = document.querySelector("form");
    const inputField = document.querySelector('input[name="searchTitle"]');
    // userEvent.ty
    console.log(inputField);
  });
});
