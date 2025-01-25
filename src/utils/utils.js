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

async function postLogin(data) {
    const url = "http://localhost:5000/login/admin";
    const response = await fetch(url, {
        mode: "cors",
        credentials: "include",
        method: "post",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5000",
        },
    });

    return response.status;
}

async function postPost(submission) {
    const url = "http://localhost:5000/posts";
    const response = await fetch(url, {
        credentials: "include",
        method: "post",
        body: JSON.stringify(submission),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5000",
        },
    });
    const json = await response.json();
    return { status: response.status, data: json };
}

async function putDeletePost(submission) {
    const url = "http://localhost:5000/posts/" + submission.id;
    const response = await fetch(url, {
        credentials: "include",
        method: submission.method,
        body: JSON.stringify(submission),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5000",
        },
    });
    const json = await response.json();
    return { status: response.status, method: json.method };
}

async function getAllPosts(controller) {
    const url = "http://localhost:5000/posts/admin/complete";
    const response = await fetch(url, {
        signal: controller.signal,
        credentials: "include",
        method: "get",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "http://localhost:5000",
        },
    });
    const json = await response.json();
    return { status: response.status, data: json };
}

export { getPost, postLogin, postPost, putDeletePost, getAllPosts };
