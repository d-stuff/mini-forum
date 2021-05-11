import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";


import logger from "../middleware/logger.middleware";

const store = configureStore({
  reducer: {
    // post: postReducer,
    // comment: commentReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [...getDefaultMiddleware(), logger]
});
export default store;