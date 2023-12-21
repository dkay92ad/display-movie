/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithFeatures from "testing";
import Navigation from "./index";

describe("Navigation tests", () => {
  const beforeEach = () => {
    return renderWithFeatures(<Navigation />);
  };

  test("renders Search link", () => {
    beforeEach();
    const SearchLink = screen.getByRole("link", { name: "Search" });
    expect(SearchLink).toBeInTheDocument();
    expect(SearchLink.className).toEqual("active-link");
  });

  test("renders Featured field", async () => {
    beforeEach();
    const FeaturedLink = screen.getByRole("link", { name: "Featured" });
    expect(FeaturedLink).toBeInTheDocument();
    expect(FeaturedLink.className).toEqual("");
    await act(async () => {
      userEvent.click(FeaturedLink);
    });
    expect(FeaturedLink.className).toEqual("active-link");
  });
});
