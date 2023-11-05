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
            <Icon role={"edit"} url={pen} />
            <Icon role={"delete"} url={trashcan} action={() => deleteHandler(post.id)} />
        </div>
    )
};

const Icon = ({ role, url, action }) => {
    return (
        <img
            src={url}
            alt={role}
            className="icon-image ${role}"
            onClick={action} />
    )
}

export default UpdateVote;