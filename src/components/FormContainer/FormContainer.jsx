import PropTypes from "prop-types"
import { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";
import { ModalBoxStyle } from "../../Style/MUI_Style";

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import "./FormContainer.css";

const FormContainer = ({
    title = "",
    content = "",
    url = "",
    buttonCapation = "",
    buttonHandler,
    ModalCaption = "Set a secret key so you are the only one who can edit and delete the post. Press Enter when you are done."
}) => {

    const [formData, setFormData] = useState({
        "title": title,
        "content": content,
        "url": url
    });

    const [showModal, setShowModal] = useState(false);
    const [secretKey, setSecretKey] = useState("");
    const [isSecretKeyShown, setIsSecretKeyShown] = useState(true);

    const formDataHandler = (e) => {
        const target = e.target;
        setFormData({ ...formData, [target.name]: target.value });
    };

    const submitHandler = async (event) => {

        if (event.key !== "Enter") return;

        try {
            await buttonHandler(formData.title, formData.content, formData.url, secretKey, clearFormField);
            clearFormField();
            window.location = "/";
        } catch (error) {
            alert("Something went wrong inserting the record", error);
        }
    };

    const clearFormField = () => setFormData({ "title": "", "content": "", "url": "" });
    const toggleEye = () => setIsSecretKeyShown(!isSecretKeyShown);
    const closeModalHandler = () => {
        setShowModal(false);
        setIsSecretKeyShown(true);
        setSecretKey("");
    }

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
            />

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
                onClick={() => setShowModal(true)}>
                {buttonCapation}
            </button>

            <Modal
                open={showModal}
                onClose={closeModalHandler}
            >
                <Box sx={ModalBoxStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        🔐 Permission Access 🔐
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {ModalCaption}
                    </Typography>
                    <form>
                        <div className="input-container">
                            <input
                                type={isSecretKeyShown ? "password" : "text"}
                                className="secretkey-input"
                                name="secretkey"
                                autoComplete="on"
                                value={secretKey}
                                onChange={(e) => setSecretKey(e.target.value)}
                                onKeyDown={submitHandler}
                            />
                            {isSecretKeyShown
                                ? <VisibilityOffIcon onClick={toggleEye} />
                                : <VisibilityIcon onClick={toggleEye} />
                            }
                        </div>
                    </form>
                </Box>
            </Modal>

        </div>
    );
};

FormContainer.propTypes = {
    content: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    buttonCapation: PropTypes.string,
    buttonHandler: PropTypes.func,
}


export default FormContainer;