import { useState } from "react";
import { useParams } from "react-router-dom";

import supabase from "../../../Database/supabase.js";

const CommentCreation = () => {

    const postID = useParams().id;
    const [comment, setComment] = useState("");

    const submitCommentHandler = async (event) => {

        if (event.key === "Enter") {
            await supabase
                .from("Comments")
                .insert({
                    "post_id": postID,
                    "comment": comment
                });   
            setComment("");
        }
    };

    return (
        <div className="comment-creation">
            <input
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

export default CommentCreation;