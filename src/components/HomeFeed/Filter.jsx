import React from "react";

const Filter = () => {
    return (
        <div className="filter">
            <h2>Order by:</h2>
            <button className="filter-btn selected">
                Newest
            </button>

            <button className="filter-btn">
                Most Popular
            </button>
        </div>
    );
}

export default Filter;
