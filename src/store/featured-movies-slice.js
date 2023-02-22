import { createSlice } from "@reduxjs/toolkit";
import { apiKey, baseUrl, predefinedMovies } from "common/config";

const initialState = {
  movies: [],
  isLoading: false,
  error: "",
};
export const featuredMoviesSlice = createSlice({
  name: "featured-movies",
  initialState,
  reducers: {
    addFeaturedMovies: (state, action) => {
      state.movies.push(action.payload);
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetFeaturedMovies: (state, action) => {
      return initialState;
    },
  },
});

export const getMovies = () => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    if (predefinedMovies.length) {
      let promises = [];
      predefinedMovies.forEach((imdbID) => {
        promises.push(dispatch(getMovieData(imdbID, true)));
      });
      await Promise.allSettled(promises);
    }
    dispatch(setLoading(false));
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
      dispatch(addFeaturedMovies(movie));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

// this is for dispatch
export const { addFeaturedMovies, setLoading, setError, resetFeaturedMovies } =
  featuredMoviesSlice.actions;

// this is for configureStore
export default featuredMoviesSlice.reducer;
