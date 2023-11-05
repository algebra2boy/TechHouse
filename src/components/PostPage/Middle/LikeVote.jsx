import React, { useContext } from "react";
import thumb from "/thumb.jpg";

import database from "../../../Database/supabase.js";
import PostContext from "../../../Context/postContext.js";

const LikeVote = ({ post }) => {

    const { posts, setPosts } = useContext(PostContext);

    console.log(useContext(PostContext));

    const likeHandler = async () => {

        // increment the like count by 1
        setPosts((prevPosts) =>
            prevPosts.map((p) =>
                p.id == post.id
                    ? { ...p, like_count: p.like_count + 1 }
                    : p
            )
        )

        // await database
        //     .from("Posts")
        //     .update({ like_count: post.like_count + 1 })
        //     .eq("id", post.id);
    }

    return (
        <>
            {JSON.stringify(posts)}
            <img
                className="item thumb"
                src={thumb}
                alt="thumb up to this post"
                style={{ height: 40, width: 40 }}
                onClick={likeHandler}
            />

            <h5 className="item">{post.like_count} upvotes</h5>
        </>
    )
};

export default LikeVote;