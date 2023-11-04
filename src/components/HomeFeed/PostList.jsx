import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

const PostList = ({ posts, updatePostsHandler }) => {
    return (
        <div className="post-list">
            {posts && posts.map((post, index) => (
                <Link
                    to={`/post/${post.id}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                    state={
                        {
                            "post": post,
                            "updatePostsHandler": updatePostsHandler
                        }
                    }
                    key={index}>

                    <ListItem post={post} />

                </Link>
            ))}
        </div>
    );
}

export default PostList;