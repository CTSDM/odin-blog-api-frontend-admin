import { useState, useContext, useEffect } from "react";
import { Form, useNavigate, useActionData, redirect } from "react-router-dom";
import { Context as GlobalStateContext } from "../utils/GlobalStateContext.js";
import { env } from "../../config/config.js";
import styles from "./Login.module.css";
import InputLogin from "../components/InputLogin.jsx";
import { postLogin } from "../utils/utils.js";

export default function Login() {
    const [info, setInfo] = useState("");
    const [, setIsLogged] = useContext(GlobalStateContext);
    const navigate = useNavigate();
    const status = useActionData();

    useEffect(() => {
        if (status) {
            if (status === 200) {
                setInfo("APE IS IN");
                setIsLogged(true);
                navigate("/dashboard");
                return;
            } else {
                setInfo("YOU NOT APE");
                setIsLogged(false);
                redirect("/login");
                return;
            }
        }
    }, [status]);

    return (
        <>
            <div className={styles.container}>
                <Form method="post" action="/login">
                    <div className={styles["container-inputs"]}>
                        {env.inputs.login.map((input) => (
                            <InputLogin
                                key={input[1]}
                                type={input[0]}
                                name={input[1]}
                                placeholder={input[2]}
                            />
                        ))}
                        <button className={styles.input} type="submit">
                            Login
                        </button>
                    </div>
                </Form>
                <div>{info}</div>
            </div>
        </>
    );
}

export const action = async ({ request }) => {
    const data = await request.formData();
    const submission = {
        username: data.get("username"),
        password: data.get("password"),
    };

    const status = await postLogin(submission);
    return status;
};
