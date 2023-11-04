import React from "react";
import LikeVote from "./LikeVote";
import UpdateVote from "./UpdateVote";

const Middle = ({ post, updatePostsHandler }) => {
    return (
        <>
            <LikeVote post={post} updatePostsHandler={updatePostsHandler}/>
        </>
    )
}

export default Middle;