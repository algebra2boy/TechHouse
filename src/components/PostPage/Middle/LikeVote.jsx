import React from "react";
import thumb from "/thumb.jpg";

import database from "../../../Database/supabase.js";

const LikeVote = ({ post, updatePostsHandler }) => {

    const likeHandler = async () => {
        updatePostsHandler(post, "like_count", post.like_count + 1);
        const response = await database
            .from("Posts")
            .update({ like_count: post.like_count})
            .eq("id", post.id);

        console.log(response);


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