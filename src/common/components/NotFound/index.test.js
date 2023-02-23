import { act } from "react-dom/test-utils";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithFeatures from "testing";
import NotFound from "./index";

describe("NotFound tests", () => {
  const beforeEach = () => {
    return renderWithFeatures(<NotFound />);
  };

  test("renders NotFound field", async () => {
    beforeEach();

    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
    const navLink = screen.getByRole("link");
    expect(navLink).toBeInTheDocument();
    await waitFor(() => userEvent.click(navLink));
    expect(navLink.className).toEqual("active");
  });
});
