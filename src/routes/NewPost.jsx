import { useActionData, Form, Link } from "react-router-dom";
import TitleInput from "../components/TitleInput.jsx";
import ContentInput from "../components/ContentInput.jsx";
import Visibility from "../components/Visibility.jsx";
import styles from "./NewPost.module.css";
import { env } from "../../config/config.js";

function NewPost() {
    const response = useActionData();

    let divInfo = null;
    if (response && response.status > 400) {
        divInfo = <div>Something went wrong on the server.</div>;
    }
    if (response && response.status === 201) {
        divInfo = (
            <div>
                <span>The post was correctly created. </span>
                <Link to={`/posts/${response.data.id}`}> Click here to go to the post</Link>
            </div>
        );
    }

    return (
        <div>
            <div>
                <Form method="post" action="/posts/new">
                    <div className={styles.form}>
                        <TitleInput />
                        <ContentInput />
                        <Visibility />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </div>
            {divInfo}
        </div>
    );
}

export const action = async ({ request }) => {
    const data = await request.formData();
    const submission = {
        title: data.get("title"),
        content: data.get("content"),
        // we convert the data.get('visible') to boolean
        visible: !!data.get("visible"),
    };

    const responseAndJSON = await submitPost(submission);
    return responseAndJSON;
};

async function submitPost(submission) {
    const url = `${env.server_url}/posts`;
    const response = await fetch(url, {
        credentials: "include",
        method: "post",
        body: JSON.stringify(submission),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    const json = await response.json();
    return { status: response.status, data: json };
}

export default NewPost;
