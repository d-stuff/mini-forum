import { createSlice } from "@reduxjs/toolkit";

const helloSlice = createSlice({
  name: "hello",
  initialState: '',
  reducers: {
    clicked: (state, action) => state = action.payload,
  }
});

export default helloSlice.reducer;
export const { clicked } = helloSlice.actions;
