import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";

function PostsList() {
  const posts = useSelector(selectAllPosts);

  const renderedPosts = posts.map((post) => (
    <div>
      <article className="posts" key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p className="test">
          <PostAuthor userId={post.userId} />
        </p>
      </article>
    </div>
  ));

  return (
    <section className="posts">
      <div className="posts-layout">
        <h2 className="gridtest">Create posts and enjoy the blog</h2>
      </div>
      {renderedPosts}
    </section>
  );
}

export default PostsList;
