import { Outlet, Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
    return (
        <>
            <div className="NavBar">
                <h1 className="title">TechHouse</h1>
                <div className="searchBar-container">
                    <input
                        type="text"
                        placeholder="Search"
                        className="search-input" />
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
            <Outlet />
        </>
    )

};

export default NavBar;