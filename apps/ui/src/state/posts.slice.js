import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts_list: [],
    post: {},
    isLoading: true,
    error_msg: "",
    comments: [],
    content: "This is the post content",
    likes: 0,
    author: 'me',
    timeOfUpload: Date.now,
  },
  reducers: {
    comment: (state, action) => {
      state.post = action.payload;
    },
    seeComments: (state, action) => {
      state.post = action.payload;
    }
  }
});

export default postsSlice.reducer;
export const { seeComments, comment } = postsSlice.actions;
