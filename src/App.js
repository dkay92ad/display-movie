import { lazy, Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { AppContainer, AppHeader } from "./styles";
import { GlobalStyles, theme } from "common/styles/globalStyles";
import Loading from "common/components/Loading";
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
          <ErrorBoundary fallback={<ErrorPage />}>
            <AppHeader>
              <NavLink to={routes.HOME}>Movie DB</NavLink>
            </AppHeader>
            <Navigation />
            <Suspense fallback={<Loading />}>
              <Routes>
                <Route exact path={routes.HOME} element={<MovieSearch />} />
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
