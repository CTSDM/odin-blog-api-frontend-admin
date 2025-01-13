import { redirect } from "react-router-dom";

export async function loader() {
    const url = "http://localhost:5000/login";
    const response = await fetch(url, {
        mode: "cors",
        credentials: "include",
        method: "get",
    });
    await sleep(4000);
    if (response.error) console.log(response.error);
    if (response.status === 200) {
        return;
        return redirect("/dashboard");
    } else {
        return;
        return redirect("/login");
    }
}

async function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}
