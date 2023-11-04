import React from "react";
import { useParams, useLocation } from "react-router-dom";

import PostInfo from "./Top/PostInfo";
import Middle from "./Middle/Middle";

import "./PostPage.css";

const PostPage = () => {

    const id = useParams().id;
    const post = useLocation().state.post;

    return (
        <div className="post-page">

            <div className="top-section">
                <PostInfo post={post} />
            </div>

            <div className="middle-section">
                <Middle postID={id}/>
            </div>

            <div className="botton-section">

            </div>
        </div>
    )
};

export default PostPage;