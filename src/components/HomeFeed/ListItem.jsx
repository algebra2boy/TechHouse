import React from "react";

const ListItem = ({ id, post }) => {
    return (
        <div className={`post ${id}`}>
            <h4 className="item">Posted 21 hours ago</h4>
            <h4 className="item">{post.title}</h4>
            <h2 className="item">{post.content}</h2>
            <h4 className="item">{post.like_count} upvotes</h4>
        </div>
    )
};

export default ListItem;
