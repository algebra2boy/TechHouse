import PropTypes from 'prop-types';

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

// Define propTypes for Filter component
Filter.propTypes = {
    filter: PropTypes.string,
    setFilter: PropTypes.func.isRequired,
    sort: PropTypes.func.isRequired
};

export default Filter;
