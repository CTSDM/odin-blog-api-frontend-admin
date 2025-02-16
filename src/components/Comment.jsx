import PropTypes from "prop-types";
import styles from "./Comment.module.css";
import { deleteComment } from "../utils/utils.js";

function Comment({ id, author, content, createdTime }) {
    async function handleOnClick() {
        const data = {
            username: author,
            id: id,
        };
        const response = await deleteComment(data);
        if (response && response.status >= 400) {
            console.log("something went wrong on the server");
        } else {
            console.log("the comment was successfully deleted from the database");
        }
    }

    return (
        <div className={styles.container}>
            <div>{author}</div>
            <div>{createdTime.toDateString()}</div>
            <div>{content}</div>
            <div>
                <button type="button" onClick={handleOnClick}>
                    {"Delete"}
                </button>
            </div>
        </div>
    );
}

Comment.propTypes = {
    id: PropTypes.number,
    author: PropTypes.string,
    content: PropTypes.string,
    createdTime: PropTypes.objectOf(Date),
};

export default Comment;
