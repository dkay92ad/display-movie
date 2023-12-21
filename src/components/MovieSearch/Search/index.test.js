/* eslint-disable testing-library/no-render-in-setup */
import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithFeatures from "testing";
import Search from "./index";

describe("Search tests", () => {
  const beforeEach = () => {
    return renderWithFeatures(<Search />);
  };

  test("renders checkbox field", () => {
    beforeEach();
    const checkbox = screen.getByRole("checkbox", { name: "Full Plot" });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toEqual(true);

    userEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  });

  test("renders search input field", () => {
    beforeEach();
    const inputField = screen.getByRole("textbox");

    userEvent.type(inputField, "Troy");

    expect(inputField).toHaveValue("Troy");
  });

  test("renders search button click", () => {
    beforeEach();
    const searchBtn = screen.getByText(/search/i);
    expect(searchBtn).toBeInTheDocument();

    userEvent.click(searchBtn);
  });
});
