import { useState, useEffect, useCallback} from "react";
import { useParams } from "react-router-dom";

import supabase from "../../../Database/supabase.js";

import CommentCreation from "./CommentCreation.jsx";
import "./Comment.css";

const Comments = () => {

    const postID = useParams().id;
    const [comments, setComments] = useState([]);

    const fetchComments = useCallback(async () => {
        const { data } = await supabase
            .from("Comments")
            .select("*")
            .eq("post_id", postID)
            .order('created_at', { ascending: true });
        setComments(data);
    }, [postID]);

    useEffect(() => {
        fetchComments();
    }, [fetchComments]);

    return (

        <>
            <div className="comments">
                {comments &&
                    comments.map((comment) => (
                        <li
                            className="comment"
                            key={comment.comment_id}>
                            - {comment.comment}
                        </li>
                    ))}
            </div>
            <CommentCreation updateCommentsHandler={fetchComments} />
        </>

    );
}

export default Comments;