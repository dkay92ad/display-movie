import { createSlice } from "@reduxjs/toolkit";
const initialState = {
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
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetSearchedMovies: (state, action) => {
      state.movies = [];
    },
  },
});

export const getMovies = (title) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const fetchData = async () => {
      const resp = await fetch(
        `http://www.omdbapi.com/?s=${title}&apiKey=6c3a2d45`
      );
      const data = await resp.json();
      if (!resp.ok) throw new Error("Something went wrong during API call!");
      return data;
    };

    try {
      const { Search: movieTitles } = await fetchData();
      if (movieTitles.length) {
        movieTitles.slice(0, 5).forEach(({ imdbID }) => {
          dispatch(getMovieData(imdbID));
        });
      }
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};

export const getMovieData = (id) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const fetchData = async () => {
      const resp = await fetch(
        `http://www.omdbapi.com/?i=${id}&apiKey=6c3a2d45`
      );
      const data = await resp.json();
      if (!resp.ok) throw new Error("Something went wrong during API call!");
      return data;
    };

    try {
      const movie = await fetchData();
      dispatch(addSearchedMovies(movie));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};

// this is for dispatch
export const { addSearchedMovies, resetSearchedMovies, setLoading, setError } =
  searchedMoviesSlice.actions;

// this is for configureStore
export default searchedMoviesSlice.reducer;
