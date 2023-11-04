import React from "react";
import thumb from "/thumb.jpg";

import database from "../../../Database/supabase.js";

const LikeVote = ({ post }) => {

    const likeHandler = async () => {
        await database
            .from("Posts")
            .update({ like_count: post.like_count + 1 })
            .eq("id", post.id);
    }

    return (
        <>
            <img
                className="item thumb"
                src={thumb}
                alt="thumb up to this post"
                style={{ height: 40, width: 40 }}
                onClick={likeHandler}
            />

            <h5 className="item">{post.like_count} upvotes</h5>
            {/* {JSON.stringify(post)} */}
        </>
    )
};

export default LikeVote;