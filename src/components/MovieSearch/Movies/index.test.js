/* eslint-disable testing-library/no-render-in-setup */
import { screen } from "@testing-library/react";
import renderWithFeatures from "testing";
import Movies from "./index";

describe("Movies tests", () => {
  let onCheckHandler = jest.fn();
  const beforeEach = (props) => {
    return renderWithFeatures(
      <Movies onCheckHandler={onCheckHandler} {...props} />
    );
  };

  test("renders Movies field", async () => {
    const props = {
      label: "Full Plot",
      isChecked: true,
    };
    beforeEach(props);
    // const MovieTitles = screen.getByRole("MovieTitles", { name: "Full Plot" });
    // expect(MovieTitles).toBeInTheDocument();
    // expect(MovieTitles).toBeChecked();
    // await act(async () => {
    //   userEvent.click(MovieTitles);
    // });
    // await waitFor(() => expect(onCheckHandler).toHaveBeenCalled());
    // expect(onCheckHandler).toHaveBeenCalledTimes(1);
    // // await waitFor(() => expect(MovieTitles.checked).toEqual(false));
  });
});
