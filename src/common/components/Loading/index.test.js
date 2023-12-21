/* eslint-disable testing-library/no-render-in-setup */
import renderWithFeatures from "testing";
import Loading from "./index";

describe("Loading tests", () => {
  const beforeEach = () => {
    return renderWithFeatures(<Loading />);
  };

  test("renders Loading field", async () => {
    beforeEach();
  });
});
