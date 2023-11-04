import React from "react";
import { convertTimeStamp } from "../../../extension/helper";

const PostInfo = ({ post }) => {

    return (
        <>
            <h4 className="item">{`Posted ${convertTimeStamp(post.created_at)} hours ago`}</h4>
            <h2 className="item">{post.title}</h2>
            <h3 className="item">{post.content}</h3>
            {post.url.length > 0 &&
                <img
                    className="item"
                    src={post.url}
                    alt={`image from post${post.id}`} />
            }
            <h3 className="item">{post.like_count} upvotes</h3>
        </>
    )

}

export default PostInfo;