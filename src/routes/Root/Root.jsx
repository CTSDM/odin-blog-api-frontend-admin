import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Root() {
    const navigate = useNavigate();

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            const url = "http://localhost:5000/login";
            const response = await fetch(url, {
                signal: controller.signal,
                mode: "cors",
                credentials: "include",
                method: "get",
            });
            await sleep(500);
            if (response.status === 200) {
                navigate("/dashboard");
            } else {
                navigate("/login");
            }
        })();
        return () => {
            controller.abort();
        };
    }, [navigate]);

    console.log("doing stuff");
    return <div>Loading...</div>;
}

// function to mimic rount trip form the server
async function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

export default Root;
