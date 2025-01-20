import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import Comment from "../components/Comment";
import styles from "./Post.module.css";

export async function loader({ params }) {
    const postId = params.postId;
    const response = await getPost(postId);
    return response;
}

function Post() {
    const response = useLoaderData();
    if (response.status !== 200) {
        return <div>{"Something went wrong on the server side!"}</div>;
    }

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.title}>{response.data.title}</div>
                <div className={styles.author}>{response.data.username}</div>
                <div className={styles.content}>{response.data.content}</div>
            </div>
            <div className={styles["comments-container"]}>
                {response.data.comments.map((comment) => {
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

async function getPost(id) {
    const url = `http://localhost:5000/posts/${id}`;
    const response = await fetch(url, {
        credentials: "include",
        method: "get",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5000",
        },
    });
    if (!response.ok) {
        return { status: response.status };
    }
    const json = await response.json();
    return { status: response.status, data: json };
}

export default Post;
