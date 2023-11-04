import React from "react";
import ListItem from "./ListItem";

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            {posts && posts.map((post, index) => (
                <ListItem post={post} key={index} />
            ))}
        </div>
    );
}

export default PostList;