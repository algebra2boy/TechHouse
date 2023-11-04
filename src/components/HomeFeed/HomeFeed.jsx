import React, { useState } from "react";
import Filter from "./Filter";
import ListItem from "./ListItem";

import "./HomeFeed.css";

const HomeFeed = () => {
    return (
        <div className="home-container">
            <Filter />

            <div className="post-list">
                <ListItem />
                <ListItem />
                <ListItem />
            </div>
        </div>
    )
};

export default HomeFeed;