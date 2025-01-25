import { Form, useLoaderData, useActionData, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import TitleInput from "./TitleInput";
import ContentInput from "./ContentInput";
import PropTypes from "prop-types";
import styles from "./PostEdit.module.css";
import Visibility from "./Visibility";
import { getPost, putDeletePost } from "../utils/utils";

function PostEdit() {
    const responseLoader = useLoaderData();
    const ref = useRef(null);
    const post = responseLoader && responseLoader.data;
    const navigate = useNavigate();
    const responseAction = useActionData();

    useEffect(() => {
        if (responseAction) {
            if (responseAction.status === 200) {
                if (responseAction.method === "put") {
                    navigate(`/posts/${post.id}`);
                    return;
                } else if (responseAction.method === "delete") {
                    navigate("/dashboard");
                    return;
                } else {
                    throw new Error("this shouldn't happen");
                }
            } else {
                ref.current.textContent = "There was an error on the server";
            }
        }
    }, [responseAction, post]);

    return (
        <div>
            <div>
                <Form method="put" action={`/posts/${post.id}/edit`}>
                    <div className={styles.form}>
                        <input type="hidden" name="id" value={post.id} />
                        <TitleInput defaultValue={post.title} />
                        <ContentInput defaultValue={post.content} />
                        <Visibility defaultValue={post.visibility} />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
                {ref ? <div ref={ref}></div> : null}
            </div>
            <div>
                <Form method="delete" action={`/posts/${post.id}/edit`}>
                    <input type="hidden" name="id" value={post.id} />
                    <button type="submit">Delete post</button>
                </Form>
            </div>
        </div>
    );
}

export const loader = async ({ params }) => {
    const postId = params.postId;
    const response = await getPost(postId);
    return response;
};

export const action = async ({ request }) => {
    const method = request.method.toLowerCase();
    const data = await request.formData();
    const submission = {
        id: data.get("id"),
    };

    if (method === "put") {
        submission.title = data.get("title");
        submission.content = data.get("content");
        submission.visible = !!data.get("visible");
    }

    submission.method = request.method;
    const responseAndJSON = await putDeletePost(submission);
    return responseAndJSON;
};

PostEdit.propTypes = {
    postData: PropTypes.string,
};

export default PostEdit;
