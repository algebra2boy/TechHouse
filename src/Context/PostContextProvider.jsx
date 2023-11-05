import { useState } from "react";
import PostContext from "./postContext";

export const PostContextProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    return (
        <PostContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostContext.Provider>
    )
}