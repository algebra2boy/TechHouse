import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import ListItem from "./ListItem";
import database from "../../database/supabase";

import "./HomeFeed.css";

const HomeFeed = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await database
                .from("Posts")
                .select();
            console.log(data);
            setPosts(data);
        };
        fetchPosts(posts);
        console.log(posts);
    }, []);

    return (
        <div className="home-container">
            <Filter />

            <div className="post-list">
                {posts && posts.map((post, index) => (
                    <ListItem id={index} post={post} key={index} />
                ))}
            </div>
        </div>
    )
};

export default HomeFeed;