import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";

function PostsList() {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  const uniquePosts = Array.from(new Set(posts.map((post) => post.id))).map(
    (id) => posts.find((post) => post.id === id)
  );

  let content;
  if (postStatus === "losding") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = uniquePosts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));

    /*const preContent = orderedPosts.filter((val, i) => {
      if (i !== orderedPosts.length - 1) {
        return val.id !== orderedPosts[i + 1].id;
      }
      return val;
    });*/
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p>{error}</p>;
  }

  return <section className="posts">{content}</section>;
}

export default PostsList;
