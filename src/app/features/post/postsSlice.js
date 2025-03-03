import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "I've heard good things.",
  },
  {
    id: "2",
    title: "Slices...",
    content: "The more I say slice, the more I want pizza.",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    /*
    postAdded(state, action) {
      state.push(action.payload);
    },
    postUpdated(state, action) {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    }, */
  },
});

export const selectAllPosts = (state) => state.posts;
export default postSlice.reducer;
