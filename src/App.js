import { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import ReactLoading from "react-loading";
import { AppContainer, AppHeader } from "./styles";
import { GlobalStyles, theme } from "common/styles/globalStyles";
import ErrorBoundary from "common/components/ErrorBoundary";
import ErrorPage from "common/components/ErrorPage";
import { routes } from "common/config";

const NotFound = lazy(() => import("common/components/NotFound"));
const MovieSearch = lazy(() => import("./components/MovieSearch"));
const Navigation = lazy(() => import("./components/Navigation"));
const MovieFeatured = lazy(() => import("./components/MovieFeatured"));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AppContainer>
          <AppHeader>
            <NavLink to="/">Movie DB</NavLink>
          </AppHeader>
          <Navigation />
          <ErrorBoundary fallback={<ErrorPage />}>
            <Suspense
              fallback={
                <ReactLoading
                  type="spin"
                  color={theme.colors.primary}
                  height={"20%"}
                  width={"20%"}
                />
              }
            >
              <Routes>
                <Route path={routes.HOME} element={<MovieSearch />} />
                <Route path={routes.SEARCH} element={<MovieSearch />} />
                <Route path={routes.FEATURED} element={<MovieFeatured />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </AppContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
