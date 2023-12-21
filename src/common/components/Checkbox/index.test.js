/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/no-render-in-setup */
import { act } from "react-dom/test-utils";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithFeatures from "testing";
import Checkbox from "./index";

describe("Checkbox tests", () => {
  let onCheckHandler = jest.fn();
  const beforeEach = (props) => {
    return renderWithFeatures(
      <Checkbox onCheckHandler={onCheckHandler} {...props} />
    );
  };

  test("renders checkbox field", async () => {
    const props = {
      label: "Full Plot",
      isChecked: true,
    };
    beforeEach(props);
    const checkbox = screen.getByRole("checkbox", { name: "Full Plot" });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toBeChecked();
    await act(async () => {
      userEvent.click(checkbox);
    });
    await waitFor(() => expect(onCheckHandler).toHaveBeenCalled());
    expect(onCheckHandler).toHaveBeenCalledTimes(1);
  });
});
