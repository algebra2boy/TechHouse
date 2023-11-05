import PropTypes from "prop-types"
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

Middle.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        created_at: PropTypes.instanceOf(Date),
        title: PropTypes.string,
        content: PropTypes.string,
        like_count: PropTypes.number,
        url: PropTypes.string
    })
}

export default Middle;