import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice.js";
import postReducer from "./features/post/postsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
});
