import { useLocation } from "react-router-dom";

import PostInfo from "./Top/PostInfo";
import Middle from "./Middle/Middle";

import "./PostPage.css";

const PostPage = () => {

    const post = useLocation().state.post;

    return (
        <div className="post-page">
            <div className="top-section">
                <PostInfo post={post} />
            </div>
            <div className="middle-section">
                <Middle post={post}/>
            </div>

            <div className="botton-section">

            </div>
        </div>
    )
};

export default PostPage;