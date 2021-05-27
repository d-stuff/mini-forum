import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import postsReducer from "./posts.slice";

import logger from "../middleware/logger.middleware";

const store = configureStore({
  reducer: {
    post: postsReducer,
    // comment: commentReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [...getDefaultMiddleware(), logger]
});
export default store;