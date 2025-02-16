import { env } from "../../config/config";

async function getPost(id) {
    const url = `${env.server_url}/posts/${id}`;
    const response = await fetch(url, {
        credentials: "include",
        method: "get",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    if (!response.ok) {
        return { status: response.status };
    }
    const json = await response.json();
    return { status: response.status, data: json };
}

async function postLogin(data) {
    const url = `${env.server_url}/login/admin`;
    const response = await fetch(url, {
        mode: "cors",
        credentials: "include",
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });

    const json = await response.json();
    return { status: response.status, ...json };
}

async function postPost(submission) {
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

async function putDeletePost(submission) {
    const url = `${env.server_url}/posts/` + submission.id;
    const response = await fetch(url, {
        credentials: "include",
        method: submission.method,
        body: JSON.stringify(submission),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    const json = await response.json();
    return { status: response.status, method: json.method };
}

async function getAllPosts(controller) {
    const url = `${env.server_url}/posts/admin/complete`;
    const response = await fetch(url, {
        signal: controller.signal,
        credentials: "include",
        method: "get",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    const json = await response.json();
    return { status: response.status, data: json };
}

async function deleteComment(data) {
    const url = `${env.server_url}/comments`;
    const response = await fetch(url, {
        credentials: "include",
        method: "delete",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });
    return { status: response.status };
}

export { getPost, postLogin, postPost, putDeletePost, getAllPosts, deleteComment };
