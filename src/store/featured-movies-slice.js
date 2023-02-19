import { createSlice } from "@reduxjs/toolkit";
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
  },
});

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
      dispatch(addFeaturedMovies(movie));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(false));
    }
  };
};

// this is for dispatch
export const { addSearchedMovies, addFeaturedMovies, setLoading, setError } =
featuredMoviesSlice.actions;

// this is for configureStore
export default featuredMoviesSlice.reducer;
