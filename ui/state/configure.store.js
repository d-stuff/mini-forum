import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";


import logger from "../middleware/log.middleware";

const store = configureStore({
  reducer: {
    count: countReducer,
    person: personReducer,
    color: colorReducer
  },
  preloadedState: get_local_state(),
  devTools: process.env.NODE_ENV !== "production",
  middleware: [...getDefaultMiddleware(), logger, save_state_locally]
});
export default store;