import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "common/styles/globalStyles";
import store from "./../store/index";

function renderWithFeatures(Component) {
  return render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{Component}</BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default renderWithFeatures;
