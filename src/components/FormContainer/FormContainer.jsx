import React from "react";
import "./FormContainer.css";

const FormContainer = () => {
    return (
        <div className="form-container">
            <input
                className="Title"
                type="text"
                placeholder="Title"
            />

            <textarea
                className="Content"
                placeholder="Content (Optional)"
            ></textarea>

            <input
                className="ImageURL"
                type="text"
                placeholder="Image URL (Optional)"
            />

            <button className="btn" id="submit-button">
                Create Post
            </button>
        </div>
    );
};


export default FormContainer;