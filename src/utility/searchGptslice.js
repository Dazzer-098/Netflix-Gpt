import { createSlice } from "@reduxjs/toolkit";

const gptToggle = createSlice({
  name: "GptSearchToggle",
  initialState: {
    toggle: false,
    toggleLanguage: "en",
  },
  reducers: {
    GptSearchToggle: function (state) {
      state.toggle = !state.toggle;
    },
    changeLanguage: function (state, action) {
      state.toggleLanguage = action.payload;
    },
  },
});
export default gptToggle.reducer;
export const { GptSearchToggle, changeLanguage } = gptToggle.actions;
