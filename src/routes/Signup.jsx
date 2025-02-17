import { useState, useContext, useEffect } from "react";
import { useNavigate, useActionData } from "react-router-dom";
import { Context as GlobalStateContext } from "../utils/GlobalStateContext.js";
import { env } from "../../config/config.js";
import ErrMsg from "../components/ErrMsg.jsx";
import { routes } from "../routes.jsx";
import styles from "./Signup.module.css";
import FormCredentials from "../components/FormCredentials.jsx";
import { submitSignup } from "../utils/requests.js";

export default function Signup() {
    const [info, setInfo] = useState("");
    const [isLogged, setIsLogged] = useContext(GlobalStateContext);
    const navigate = useNavigate();
    const response = useActionData();

    useEffect(() => {
        if (response && response.status) {
            if (response.status === 200) {
                setInfo("WELCOME TO THE JUNGLE, NEW APE!");
                navigate("/login");
                return;
            } else if (response.status >= 400) {
                setInfo("SOMETHING WENT WRONT, CANNOT REGISTER APE");
                setIsLogged(false);
                return;
            }
        }
    }, [response, navigate, setIsLogged]);

    if (isLogged === true) {
        routes.navigate("/");
        return;
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles["container-information"]}>
                    {info ? (
                        <div className={styles.errors}>
                            <>
                                <div>{info}</div>
                                {response && response.status >= 400 ? (
                                    <ErrMsg messages={response.data.errMsg} />
                                ) : null}
                            </>
                        </div>
                    ) : null}
                </div>
                <FormCredentials
                    inputs={env.inputs.signup}
                    action={"/signup"}
                    buttonText="Create account"
                />
            </div>
        </>
    );
}

export const action = async ({ request }) => {
    const data = await request.formData();
    const submission = {
        username: data.get("username"),
        password: data.get("password"),
        rePassword: data.get("rePassword"),
        adminCode: data.get("adminCode"),
    };
    return await submitSignup(submission);
};
