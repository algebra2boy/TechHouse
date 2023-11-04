import React from "react";
import { useParams, useLocation } from "react-router-dom";

import PostInfo from "./Top/PostInfo";
import Middle from "./Middle/Middle";

import "./PostPage.css";

const PostPage = () => {

    const id = useParams().id;
    const post = useLocation().state.post;
    const updatePostsHandler = useLocation().state.updatePostsHandler;

    return (
        <div className="post-page">
            <div className="top-section">
                <PostInfo post={post} />
            </div>

            <div className="middle-section">
                <Middle post={post} updatePostsHandler={updatePostsHandler} />
            </div>

            <div className="botton-section">

            </div>
        </div>
    )
};

export default PostPage;