import PropTypes from "prop-types"
import { convertTimeStamp } from "../../../Extension/helper";

const PostInfo = ({ post }) => {

    return (
        <>
            <h4 className="item">{convertTimeStamp(post.created_at)}</h4>
            <h2 className="item">{post.title}</h2>
            <h3 className="item">{post.content}</h3>
            {post.url.length > 0 &&
                <img
                    className="post-img item"
                    src={post.url}
                    alt={`image from post${post.id}`} 
                />
            }
        </>
    )

}

PostInfo.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    created_at: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    like_count: PropTypes.number,
    url: PropTypes.string
  })
}

export default PostInfo;