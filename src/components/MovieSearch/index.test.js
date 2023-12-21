/* eslint-disable testing-library/no-render-in-setup */
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithFeatures from "testing";
import MovieSearch from "./index";

describe("MovieSearch tests", () => {
  const beforeEach = () => {
    return renderWithFeatures(<MovieSearch />);
  };

  test("renders checkbox field", () => {
    const props = {};
    beforeEach(props);
    const checkbox = screen.getByRole("checkbox", { name: "Full Plot" });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toEqual(true);

    userEvent.click(checkbox);

    expect(checkbox.checked).toEqual(false);
  });

  test("renders search input field", () => {
    const props = {};
    beforeEach(props);
    const inputField = screen.getByRole("textbox");

    userEvent.type(inputField, "Troy");
    expect(inputField).toHaveValue("Troy");
  });

  test("renders search button click", async () => {
    const props = {};
    beforeEach(props);
    const searchBtn = screen.getByText(/search/i);
    expect(searchBtn).toBeInTheDocument();

    userEvent.click(searchBtn);
  });
});
