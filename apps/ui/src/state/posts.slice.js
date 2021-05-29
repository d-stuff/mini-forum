import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    data: [],
    isLoading: true,
    error_msg: "",
  },
  reducers: {
    // posts_are_ready(state, action) {
    //   data = action.payload;
    //   isLoading = false;
    //   error_msg = "";
    // }

  }
});

export default postsSlice.reducer;
export const {} = postsSlice.actions;
