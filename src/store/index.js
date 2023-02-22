import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import searchedMovies from "./searched-movies-slice";
import featuredMovies from "./featured-movies-slice";

export default configureStore({
  reducer: { searchedMovies, featuredMovies },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
