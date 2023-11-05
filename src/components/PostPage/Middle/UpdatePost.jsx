import pen from "/pen.jpeg";
import trashcan from "/trashcan.png";

import "./UpdatePost.css";

const UpdateVote = () => {
    return (
        <>
            <Icon role={"edit"} url={pen}/>
            <Icon role={"delete"} url={trashcan}/>
        </>
    )
};

const Icon = ({ role, url }) => {
    return (
        <div className={`icon-button ${role}`}>
            <img src={url} alt="" />
        </div>
    )
}

export default UpdateVote;