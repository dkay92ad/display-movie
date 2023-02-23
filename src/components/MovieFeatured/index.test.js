import { act } from "react-dom/test-utils";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithFeatures from "testing";
import MovieFeatured from "./index";

describe("MovieFeatured tests", () => {
  let onCheckHandler = jest.fn();
  const beforeEach = (props) => {
    return renderWithFeatures(
      <MovieFeatured onCheckHandler={onCheckHandler} {...props} />
    );
  };

  test("renders MovieFeatured field", async () => {
    const props = {
      label: "Full Plot",
      isChecked: true,
    };
    beforeEach(props);
    screen.debug();
    // const checkbox = screen.getByRole("checkbox", { name: "Full Plot" });
    // expect(checkbox).toBeInTheDocument();
    // expect(checkbox).toBeChecked();
    // await act(async () => {
    //   userEvent.click(checkbox);
    // });
    // await waitFor(() => expect(onCheckHandler).toHaveBeenCalled());
    // expect(onCheckHandler).toHaveBeenCalledTimes(1);
    // await waitFor(() => expect(checkbox.checked).toEqual(false));
  });
});
