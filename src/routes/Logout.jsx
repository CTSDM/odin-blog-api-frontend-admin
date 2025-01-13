import routes from "../routes.jsx";

function Logout() {
    async function handleClick() {
        const url = "http://localhost:5000/logout";
        const response = await fetch(url, {
            mode: "cors",
            method: "post",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (response.error) {
            console.log(response.error);
        }
        routes.navigate("/");
    }

    return (
        <div>
            <button type="button" onClick={handleClick}>
                Logout
            </button>
        </div>
    );
}

export default Logout;
