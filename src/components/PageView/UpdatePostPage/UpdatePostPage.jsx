import PropTypes from "prop-types"
import FormContainer from "../../FormContainer/FormContainer";

import { useLocation, useParams } from "react-router-dom";

import supabase from "../../../database/supabase.js"

const UpdatePostPage = () => {

    const { title, content, url } = useLocation().state;
    const postID = useParams().id;

    const updatePostHandler = async (title, content, url) => {
        await supabase
            .from("Posts")
            .update({
                "title": title,
                "content": content,
                "url": url
            })
            .eq("id", postID);
    }

    return (
        <div className="update-post-page" style={{ "padding": "50px" }}>
            <FormContainer
                title={title}
                content={content}
                url={url}
                buttonCapation="Update Post"
                buttonHandler={updatePostHandler}
            />
        </div>
    )
};

UpdatePostPage.propTypes = {
    content: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string
}

export default UpdatePostPage;