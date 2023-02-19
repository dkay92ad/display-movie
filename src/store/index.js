import { configureStore } from '@reduxjs/toolkit';
import searchedMovies from './searched-movies-slice';
import featuredMovies from './featured-movies-slice';

export default configureStore({
  reducer: {searchedMovies, featuredMovies},
});