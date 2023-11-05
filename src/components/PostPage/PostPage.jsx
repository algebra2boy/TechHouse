import { useParams } from "react-router-dom";
import { useContext } from "react";

import PostInfo from "./Top/PostInfo";
import Middle from "./Middle/Middle";
import PostContext from "../../Context/postContext";

import "./PostPage.css";

const PostPage = () => {

    // get the post id from the query parameter in the url
    const { id } = useParams();
    const { posts } = useContext(PostContext);
    const post = posts.find(p => p.id === parseInt(id));

    return (
        <div className="post-page">
            <div className="top-section">
                <PostInfo post={post} />
            </div>
            <div className="middle-section">
                <Middle post={post} />
            </div>

            <div className="botton-section">

            </div>
        </div>
    )
};

export default PostPage;