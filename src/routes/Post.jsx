import PropTypes from "prop-types";
import { useState } from "react";
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
    const post = response && response.data;
    const [status, setStatus] = useState(post && post.visible);

    function handleClick() {
        setStatus(!status);
        changePostVisibility(response.data.id, !status);
    }

    if (response.status !== 200) {
        return <div>{"Something went wrong on the server side!"}</div>;
    }

    return (
        <div>
            <div className={styles.status}>
                <div>This is post is currently: {status ? "Visible" : "Not Visible"}</div>
                <div>
                    Click here to change the status:
                    <button type="button" onClick={handleClick}>
                        Change to {status ? "Not Visible" : "Visible"}
                    </button>
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

async function changePostVisibility(id, visible) {
    const data = { id, visible };
    console.log(data);
    const url = `http://localhost:5000/posts/${id}`;
    const response = await fetch(url, {
        credentials: "include",
        method: "put",
        body: JSON.stringify(data),
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
