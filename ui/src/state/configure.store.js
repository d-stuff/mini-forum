import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import post from "./post.store";


import logger from "../middleware/logger.middleware";

const store = configureStore({
  reducer: {
    post: postReducer
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: [...getDefaultMiddleware(), logger]
});
export default store;