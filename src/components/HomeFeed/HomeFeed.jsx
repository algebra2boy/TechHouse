import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import ListItem from "./ListItem";
import database from "../../database/supabase";

import "./HomeFeed.css";

const HomeFeed = () => {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState(""); // either "newest" or "popular"

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await database
                .from("Posts")
                .select()
                .order('created_at', { ascending: true });
            setPosts(data);
        };
        fetchPosts(posts);
    }, []);

    const customSort = (filter) => {
        if (filter === "newest") {
            posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else if (filter === "popular") {
            posts.sort((a, b) => b.like_count - a.like_count);
        }
    }

    return (
        <div className="home-container">
            <Filter filter={filter} setFilter={setFilter} sort={customSort} />

            <div className="post-list">
                {posts && posts.map((post, index) => (
                    <ListItem id={index} post={post} key={index} />
                ))}
            </div>
        </div>
    )
};

export default HomeFeed;