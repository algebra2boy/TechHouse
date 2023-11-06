import { Link } from "react-router-dom";

import PropTypes from "prop-types"
import pen from "/pen.jpeg";
import trashcan from "/trashcan.png";

import supabase from "../../../Database/supabase.js";

const UpdateVote = ({ post }) => {

    const deleteHandler = async (postID) => {

        await supabase
            .from("Posts")
            .delete()
            .eq("id", postID);

        window.location = "/";
    }

    return (
        <div className="middle-right-side">
            <Link
                to={`/updatePost/${post.id}`}
                state={
                    {
                        title: post.title,
                        content: post.content,
                        url: post.url
                    }
                }
            >
                <Icon role={"edit"} url={pen} />
            </Link>

            <Icon role={"delete"} url={trashcan} action={() => deleteHandler(post.id)} />

        </div>
    )
};

UpdateVote.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        created_at: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        like_count: PropTypes.number,
        url: PropTypes.string
    })
}

const Icon = ({ role, url, action }) => {
    return (
        <img
            src={url}
            alt={role}
            className="icon-image ${role}"
            onClick={action} />
    )
}

Icon.propTypes = {
    action: PropTypes.func,
    role: PropTypes.string,
    url: PropTypes.string
}

export default UpdateVote;