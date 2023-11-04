import React from "react";
import LikeVote from "./LikeVote";
import UpdateVote from "./UpdateVote";

const Middle = ({ postID }) => {
    return (
        <>
            <LikeVote postID={postID}/>
        </>
    )
}

export default Middle;