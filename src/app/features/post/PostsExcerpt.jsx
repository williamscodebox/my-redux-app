import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

function PostsExcerpt({ post }) {
  return (
    <div className="postsview">
      <article className="posts">
        <h3>{post.title}</h3>
        <p>{post.content.substring(0, 100)}</p>
        <p className="test">
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
      </article>
    </div>
  );
}

export default PostsExcerpt;
