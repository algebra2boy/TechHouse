import PropTypes from "prop-types"
import FormContainer from "../../FormContainer/FormContainer";

import { useLocation } from "react-router-dom";

const UpdatePostPage = () => {

    const { title, content, url } = useLocation().state;

        return(
            <div className="update-post-page" style={{ "padding": "50px" }}>
                <FormContainer
                    title={title}
                    content={content}
                    url={url}
                    buttonCapation="Update Post"
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