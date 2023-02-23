import { screen } from "@testing-library/react";
import renderWithFeatures from "testing";
import ErrorBoundary from "./index";

describe("ErrorBoundary tests", () => {
  const beforeEach = (props) => {
    return renderWithFeatures(<ErrorBoundary {...props} />);
  };

  test("renders ErrorBoundary field", async () => {
    const children = <div>Children</div>;
    const props = {
      children,
    };
    beforeEach(props);
    expect(screen.getByText("Children")).toBeInTheDocument();
  });
});
