import { createSlice } from "@reduxjs/toolkit";

const LatestMoviesSlice = createSlice({
  name: "LatestMovies",
  initialState: {
    nowPlaying: null,
    randomMovies: Math.round(Math.random() * 10) * 2,
    nowPlayingTrailer: null,
  },
  reducers: {
    addMovies: function (state, action) {
      state.nowPlaying = action.payload;
    },
    addTrailer: function (state, action) {
      state.nowPlayingTrailer = action.payload;
    },
  },
});
export default LatestMoviesSlice.reducer;
export const { addMovies, addTrailer } = LatestMoviesSlice.actions;
