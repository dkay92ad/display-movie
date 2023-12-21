/* eslint-disable testing-library/no-render-in-setup */
import { act } from "react-dom/test-utils";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

describe("App tests", () => {
  const beforeEach = () => {
    return render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  };

  test("renders App", async () => {
    await act(async () => {
      beforeEach();
    });
    const logo = screen.getByRole("link", { name: "Movie DB" });
    expect(logo).toBeInTheDocument();
    const searchLink = screen.getByRole("link", { name: "Search" });
    expect(searchLink).toBeInTheDocument();
    const featuredLink = screen.getByRole("link", { name: "Featured" });
    expect(featuredLink).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
    const textbox = screen.getByRole("textbox");
    expect(textbox).toBeInTheDocument();
    const searchButton = screen.getByRole("button", { name: "Search" });
    expect(searchButton).toBeInTheDocument();
  });
});
