import { act } from "react-dom/test-utils";
import { screen, waitFor } from "@testing-library/react";
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
    act(() => {
      userEvent.click(checkbox);
    });
    expect(checkbox.checked).toEqual(false);
  });

  test("renders search input field", () => {
    const props = {};
    beforeEach(props);
    const inputField = screen.getByRole("textbox");

    act(() => {
      userEvent.type(inputField, "Troy");
    });
    expect(inputField).toHaveValue("Troy");
  });

  test("renders search button click", async () => {
    const props = {};
    beforeEach(props);
    const searchBtn = screen.getByText(/search/i);
    expect(searchBtn).toBeInTheDocument();
    await act(async () => {
      userEvent.click(searchBtn);
    });
    
    screen.debug();
  });
});
