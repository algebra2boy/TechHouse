import PropTypes from "prop-types"
import { useState } from "react";
import { useParams } from "react-router-dom";

import supabase from "../../../Database/supabase.js";

const CommentCreation = ({ updateCommentsHandler }) => {

    const postID = useParams().id;
    const [comment, setComment] = useState("");

    const submitCommentHandler = async (event) => {

        if (event.key === "Enter") {
            if (comment.length <= 10) {
                alert("comment is too short, must be at least 10 characters!");
                return;
            }
            await supabase
                .from("Comments")
                .insert({
                    "post_id": postID,
                    "comment": comment
                });
            setComment("");
            updateCommentsHandler();
        }
    };

    return (
        <div className="comment-creation item">
            <input
                className="textfield"
                type="text"
                name="comment"
                value={comment}
                placeholder="Leave a comment"
                onChange={(e) => setComment(e.target.value)}
                onKeyDown={submitCommentHandler}
            />
        </div>

    );
}

CommentCreation.propTypes = {
    updateCommentsHandler: PropTypes.func
}

export default CommentCreation;