import FormContainer from "../../FormContainer/FormContainer";

import supabase from "../../../database/supabase.js";

const CreatePostPage = () => {

    const createPostHandler = async (title, content, url, secretKey, clearFormField) => {

        if (secretKey.length <= 5) {
            alert("password is too short. Please try a password with at least 5 characters");
            return;
        }

        // check if title is empty
        if (title.length == 0) {
            alert("Title is empty!!")
            clearFormField();
            return;
        }

        await supabase
            .from("Posts")
            .insert({
                "title": title,
                "content": content,
                "url": url,
                "password": secretKey
            });
    }

    return (
        <div className="create-post-page" style={{ "padding": "50px" }}>
            {title}
            {secretKey}
            <FormContainer
                buttonCapation="Create Post"
                buttonHandler={createPostHandler} />
        </div>
    )
};

export default CreatePostPage;