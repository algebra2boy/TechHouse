import { useContext, useEffect, useState } from "react";
import { useOutletContext } from 'react-router-dom';

import Filter from "./Filter";
import database from "../../database/supabase.js";

import "./HomeFeed.css";
import PostList from "./PostList";
import PostContext from "../../Context/postContext";

const HomeFeed = () => {

    // this comes from parent compoennt (search bar)
    const { searchTerm } = useOutletContext();

    const { posts, setPosts } = useContext(PostContext);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [filter, setFilter] = useState(""); // either "newest" or "popular"

    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await database
                .from("Posts")
                .select()
                .order('created_at', { ascending: true });
            setPosts(data);
        };
        fetchPosts();
    }, [setPosts]); // <- including setPosts here to satisfy ESLint

    useEffect(() => {
        if (searchTerm.length > 0) setFilteredPosts(posts.filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase())));
    }, [searchTerm, posts]);

    const customSort = (filter) => {
        if (filter === "newest") {
            posts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        } else if (filter === "popular") {
            posts.sort((a, b) => b.like_count - a.like_count);
        }
    };

    return (
        <div className="home-container">

            <Filter filter={filter} setFilter={setFilter} sort={customSort} />

            <PostList
                posts={searchTerm.length === 0 ? posts : filteredPosts} />

        </div>
    )
};

export default HomeFeed;