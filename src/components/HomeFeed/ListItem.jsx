import React from "react";

const ListItem = ({ post }) => {

    const convertTimeStamp = (timestamp) => {
        const prev = new Date(timestamp);
        const curr = new Date();
        const difference = curr - prev;
        const differenceInHours = Math.floor(difference / 1000 / 60 / 60);

        return differenceInHours <= 24 ? differenceInHours : differenceInHours % 24;
    }

    return (
        <div className={`post - ${post.id}`}>
            <h4 className="item">{`Posted ${convertTimeStamp(post.created_at)} hours ago`}</h4>
            <h4 className="item">{post.title}</h4>
            <h2 className="item">{post.content}</h2>
            <h4 className="item">{post.like_count} upvotes</h4>
        </div>
    )
};

export default ListItem;
