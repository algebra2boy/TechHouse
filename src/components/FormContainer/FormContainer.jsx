import React from "react";

const FormContainer = () => {
    return (
        <div className="form-container">
            <input
                type="text"
                placeholder="Title"
            />

            <input
                type="text"
                placeholder="Content (Optional)"
            />

            <input
                type="text"
                placeholder="Image URL (Optional)"
            />

            <button className="Create Post">
                
            </button>
        </div>
    );
};


export default FormContainer;