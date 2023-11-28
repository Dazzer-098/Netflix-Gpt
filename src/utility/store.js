import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import LatestMoviesSlice from "./LatestMoviesSlice";

const store = configureStore({
  reducer: {
    userInfo: userSlice,
    LatestMovies: LatestMoviesSlice,
  },
});

export default store;
