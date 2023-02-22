import { createSlice } from "@reduxjs/toolkit";
import { apiKey, baseUrl } from "common/config";

const initialState = {
  searchedTitle: "",
  isFullPlot: true,
  movies: [],
  isLoading: false,
  error: "",
};
export const searchedMoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addSearchedMovies: (state, action) => {
      state.movies.push(action.payload);
    },
    clearMovies: (state, action) => {
      state.movies = [];
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearchedTitle: (state, action) => {
      state.searchedTitle = action.payload;
    },
    setIsFullPlot: (state, action) => {
      state.isFullPlot = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetSearchedMovies: (state, action) => {
      return initialState;
    },
  },
});

export const getMovies = (title, isFullPlot) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    dispatch(clearMovies());
    const fetchData = async () => {
      const resp = await fetch(
        `${baseUrl}?` +
          new URLSearchParams({
            s: title,
            apiKey,
          })
      );
      const data = await resp.json();
      if (!resp.ok) throw new Error("Something went wrong during API call!");
      return data;
    };

    try {
      const { Search: movieTitles } = await fetchData();
      if (movieTitles.length) {
        let promises = [];
        movieTitles.slice(0, 5).forEach(({ imdbID }) => {
          promises.push(dispatch(getMovieData(imdbID, isFullPlot)));
        });
        await Promise.allSettled(promises);
      }
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};

export const getMovieData = (id, isFullPlot) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const resp = await fetch(
        `${baseUrl}?` +
          new URLSearchParams({
            i: id,
            plot: isFullPlot ? "full" : null,
            apiKey,
          })
      );
      const data = await resp.json();
      if (!resp.ok) throw new Error("Something went wrong during API call!");
      return data;
    };

    try {
      const movie = await fetchData();
      dispatch(addSearchedMovies(movie));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

// this is for dispatch
export const {
  addSearchedMovies,
  clearMovies,
  resetSearchedMovies,
  setLoading,
  setError,
  setIsFullPlot,
  setSearchedTitle,
} = searchedMoviesSlice.actions;

// this is for configureStore
export default searchedMoviesSlice.reducer;
