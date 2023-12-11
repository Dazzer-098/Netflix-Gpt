import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import LatestMoviesSlice from "./LatestMoviesSlice";
import gptToggle from "./searchGptslice";

const store = configureStore({
  reducer: {
    userInfo: userSlice,
    LatestMovies: LatestMoviesSlice,
    GptSearchToggle: gptToggle,
  },
});

export default store;
