import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts && posts.map((post, index) => (
                <Link
                    to={`/post/${post.id}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                    state={
                        {
                            "post": post,
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