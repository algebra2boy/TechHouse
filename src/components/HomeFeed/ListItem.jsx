import React from "react";
import { convertTimeStamp } from "../../Extension/helper";

const ListItem = ({ post }) => {

    return (
        <div className={`post - ${post.id}`}>
            <h4 className="item">{convertTimeStamp(post.created_at)}</h4>
            <h4 className="item">{post.title}</h4>
            <h2 className="item">{post.content}</h2>
            <h4 className="item">{post.like_count} upvotes</h4>
        </div>
    )
};

export default ListItem;
