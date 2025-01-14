import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context as GlobalStateContext } from "../utils/GlobalStateContext.js";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [info, setInfo] = useState("");
    const [, setIsLogged] = useContext(GlobalStateContext);
    const navigate = useNavigate();

    function handleChangeCurry(foo) {
        return function (e) {
            handleChange(foo, e);
        };
    }

    function handleChange(foo, e) {
        foo(e.currentTarget.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const inputs = [...e.currentTarget.querySelectorAll("input")];
        const data = {};
        inputs.forEach((input) => {
            const name = input.name;
            const value = input.value;
            data[name] = value;
        });
        await postLogin(data);
    }

    async function postLogin(data) {
        const url = "http://localhost:5000/login";
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
        if (response.status === 200) {
            const newData = await response.json();
            setInfo("APE IS IN");
            console.log(newData);
            setIsLogged(true);
            navigate("/dashboard");
            return;
        } else {
            setInfo("YOU NOT APE");
            console.log("the response from the server was not bueno");
            setIsLogged(false);
            return;
        }
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={username}
                            onChange={handleChangeCurry(setUsername)}
                        />
                    </div>
                    <div>
                        <label htmlFor="pw">Passwordz:</label>
                        <input
                            type="password"
                            name="password"
                            id="pw"
                            value={password}
                            onChange={handleChangeCurry(setPassword)}
                        />
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
                <div>{info}</div>
            </div>
        </>
    );
}

export default Login;
