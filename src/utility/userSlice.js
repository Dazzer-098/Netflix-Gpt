import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userInfo",
  initialState: null,
  reducers: {
    addUser: function (state, action) {
      return action.payload;
    },
    removeuser: function (state, action) {
      return action.payload;
    },
  },
});
export default userSlice.reducer;
export const { addUser, removeuser } = userSlice.actions;
