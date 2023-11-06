import PropTypes from "prop-types"
import { useState } from "react";
import supabase from "../../Database/supabase.js";

import "./FormContainer.css";

const FormContainer = ({ title = "", content = "", url = "", buttonCapation = "" }) => {

    const [formData, setFormData] = useState({
        "title": title,
        "content": content,
        "url": url
    });

    const formDataHandler = (e) => {
        const target = e.target;
        setFormData({ ...formData, [target.name]: target.value });
    };

    const submitHandler = async () => {
        // check if title is empty
        if (formData.title.length == 0) {
            alert("Title is empty!!")
            clearField();
            return;
        }

        try {
            await supabase
                .from("Posts")
                .insert({
                    "title": formData.title,
                    "content": formData.content,
                    "url": formData.url
                });
            clearField();
            window.location = "/";
        } catch (error) {
            alert("Something went wrong inserting the record", error);
        }
    };

    const clearField = () => setFormData({ "title": "", "content": "", "url": "" });

    return (
        <div className="form-container">
            <input
                className="Title"
                type="text"
                placeholder="Title"
                name="title"
                value={formData.title}
                onChange={formDataHandler}
            />

            <textarea
                className="Content"
                placeholder="Content (Optional)"
                name="content"
                value={formData.content}
                onChange={formDataHandler}
            ></textarea>

            <input
                className="ImageURL"
                type="text"
                placeholder="Image URL (Optional)"
                name="url"
                value={formData.url}
                onChange={formDataHandler}
            />

            <button
                className="btn"
                id="submit-button"
                onClick={submitHandler}>
                {buttonCapation}
            </button>
        </div>
    );
};

FormContainer.propTypes = {
  content: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  buttonCapation: PropTypes.string
}


export default FormContainer;