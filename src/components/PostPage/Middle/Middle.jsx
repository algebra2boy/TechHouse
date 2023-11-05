import LikeVote from "./LikeVote";
import UpdateVote from "./UpdatePost";

const Middle = ({ post }) => {
    return (
        <>
            <LikeVote post={post} />
            <UpdateVote post={post} />
        </>
    )
}

export default Middle;