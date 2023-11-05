import React, { useContext } from "react";
import thumb from "/thumb.jpg";

import database from "../../../Database/supabase.js";
import PostContext from "../../../Context/postContext.js";

const LikeVote = ({ post }) => {

    const { setPosts } = useContext(PostContext);

    const likeHandler = async () => {

        // increment the like count by 1
        setPosts((prevPosts) =>
            prevPosts.map((p) =>
                p.id == post.id
                    ? { ...p, like_count: p.like_count + 1 }
                    : p
            )
        )

        try {
            await database
                .from("Posts")
                .update({ like_count: post.like_count + 1 })
                .eq("id", post.id);
        } catch (error) {
            alert("unable to update like count" + error);
        }
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

            <h5 className="item" width={100} height={50}>{post.like_count} upvotes</h5>
        </>
    )
};

export default LikeVote;