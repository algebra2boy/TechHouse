import pen from "/pen.jpeg";
import trashcan from "/trashcan.png";

const UpdateVote = () => {
    return (
        <div className="middle-right-side">
            <Icon role={"edit"} url={pen} />
            <Icon role={"delete"} url={trashcan} />
        </div>
    )
};

const Icon = ({ role, url }) => {
    return (
        <img src={url} alt={role} className="icon-image ${role}" />
    )
}

export default UpdateVote;