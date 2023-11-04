import React from "react";
import { useParams, useLocation } from "react-router-dom";
import ListItem from "../HomeFeed/ListItem";

const PostPage = () => {

    const id = useParams().id;
    const post = useLocation().state.post;

    return (
        <>
            <h1>
                {id}
                {JSON.stringify(post)}
            </h1>

            <div className="post-page">
                <div className="top-section">
                    <ListItem post={post} />
                </div>

                <div className="botton-section">

                </div>
            </div>
        </>
    )
};

export default PostPage;