import { createRef } from "react";
import { act } from "react-dom/test-utils";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithFeatures from "testing";
import MovieSearch from "./Search/index";

describe("MovieSearch tests", () => {
  const ref = createRef();
  const onChangeHandler = jest.fn();

  const beforeEach = (props) => {
    return renderWithFeatures(<MovieSearch {...props} />);
  };

  test("MovieSearch input field", () => {
    const props = {
      searchInputRef: ref,
      onChangeHandler: onChangeHandler,
    };
    beforeEach(props);
    const inputField = screen.getByLabelText(/search/i);
    userEvent.click(inputField);
    act(() => {
      userEvent.keyboard("Troy");
    });
    expect(inputField).toHaveValue("Troy");
  });
});
