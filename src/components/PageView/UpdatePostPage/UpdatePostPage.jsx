import PropTypes from "prop-types"
import FormContainer from "../../FormContainer/FormContainer";

import { useLocation } from "react-router-dom";

import supabase from "../../../database/supabase.js"

const UpdatePostPage = () => {

    const { title, content, url } = useLocation().state;

    const updatePostHandler = async (newTitle, newContent, newUrl, newLikeCount) => {
        console.log("i am here")
        await supabase
            .from("Posts")
            .update({
                title: newTitle,
                content: newContent,
                url: newUrl,
                like_count: newLikeCount
            })
            .eq("id", id);
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