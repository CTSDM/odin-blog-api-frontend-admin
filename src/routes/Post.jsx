import PropTypes from "prop-types";
import { useLoaderData, Link } from "react-router-dom";
import Comment from "../components/Comment";
import styles from "./Post.module.css";
import { getPost } from "../utils/requests.js";

export async function loader({ params }) {
    const postId = params.postId;
    const response = await getPost(postId);
    return response;
}

function Post() {
    const response = useLoaderData();
    const post = response && response.data;

    if (response.status >= 500) {
        return <div>{"Something went wrong on the server side!"}</div>;
    } else if (response.status == 404) {
        return <div>{"The post could not be found."}</div>;
    }

    return (
        <div>
            <div className={styles.status}>
                <div>This is post is currently: {post.visibility ? "Visible" : "Not Visible"}</div>
                <div>
                    Click <Link to={`/posts/${post.id}/edit`}>here</Link> to edit the post.
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.title}>{post.title}</div>
                <div className={styles.author}>{post.username}</div>
                <div className={styles.content}>{post.content}</div>
            </div>
            <div className={styles["comments-container"]}>
                {post.comments.map((comment) => {
                    return (
                        <Comment
                            key={comment.id}
                            id={comment.id}
                            author={comment.username}
                            content={comment.content}
                            createdTime={new Date(comment["created_time"])}
                        />
                    );
                })}
            </div>
        </div>
    );
}

Post.propTypes = {
    params: PropTypes.object,
};

export default Post;
