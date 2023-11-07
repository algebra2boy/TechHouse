import FormContainer from "../../FormContainer/FormContainer";

import supabase from "../../../database/supabase.js";

const CreatePostPage = () => {

    const createPostHandler = async (title, content, url) => {

        await supabase
            .from("Posts")
            .insert({
                "title": title,
                "content": content,
                "url": url,
            });
    }

    return (
        <div className="create-post-page" style={{ "padding": "50px" }}>
            <FormContainer
                buttonCapation="Create Post"
                buttonHandler={createPostHandler} />
        </div>
    )
};

export default CreatePostPage;