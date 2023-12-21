/* eslint-disable testing-library/no-render-in-setup */
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithFeatures from "testing";
import ErrorPage from "./index";

describe("ErrorPage tests", () => {
  const beforeEach = () => {
    return renderWithFeatures(<ErrorPage />);
  };

  test("renders ErrorPage field", async () => {
    beforeEach();

    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    const link = screen.getByRole("link", { name: "Go back to home page" });
    expect(link).toBeInTheDocument();
    userEvent.click(link);
    expect(link.className).toEqual("active");
  });
});
