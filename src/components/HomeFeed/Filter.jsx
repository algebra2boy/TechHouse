import React from "react";

const Filter = ({ filter, setFilter, sort }) => {

    const clickHandler = (option) => {
        setFilter(option);
        sort(option);
    }

    return (
        <div className="filter">
            <h2>Order by:</h2>
            <button
                className={`filter-btn ${filter === "newest" ? "selected" : ""}`}
                onClick={() => clickHandler("newest")}>
                Newest
            </button>

            <button
                className={`filter-btn ${filter === "popular" ? "selected" : ""}`}
                onClick={() => clickHandler("popular")}
            >
                Most Popular
            </button>
        </div>
    );
}

export default Filter;
