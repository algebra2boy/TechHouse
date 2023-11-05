import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {

    const [searchTerm, setSearchTerm] = useState("");

    return (
        <>
            <div className="NavBar">
                <h1 className="title">TechHouse</h1>
                <div className="searchBar-container">
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="navigation">
                    <Link to="/">
                        <button className="nav-btn">Home</button>
                    </Link>

                    <Link to="/createPost">
                        <button className="nav-btn">Create New Post</button>
                    </Link>
                </div>
            </div>

            {/* child element */}
            <Outlet context={{ searchTerm }} />
        </>
    )

};

export default NavBar;