import React from "react";
import ListItem from "./ListItem";
import { Link } from "react-router-dom";

const PostList = ({ posts }) => {
    /* 
        In React Router v6, you can pass state through the Link component to another component using the state prop.
        However, the state passed in this manner is meant to be a snapshot or an initial value rather than something 
        that stays in sync with updates to the source of that state. If post gets updated in the context, 
        that change won’t automatically propagate to the component that received the post through the link's state.
    */
    return (
        <div className="post-list">
            {posts && posts.map((post) => (
                <Link
                    to={`/post/${post.id}`}
                    style={{ textDecoration: 'none', color: 'black' }}
                    key={post.id}>

                    <ListItem post={post} />

                </Link>
            ))}
        </div>
    );
}

export default PostList;