import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "./GlobalStateContext.js";
import { env } from "../../config/config.js";
import NavigationBar from "../components/NavigationBar.jsx";

function GlobalContextProvider() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);
    const currentUrl = window.location.pathname;
    const redirectToLogin = isLogged === false && currentUrl !== "/login";
    const navigate = useNavigate();
    const ms = 500;

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            setIsLoading(true);
            const url = `${env.server_url}/login/admin`;
            const response = await fetch(url, {
                signal: controller.signal,
                mode: "cors",
                credentials: "include",
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            });
            await sleep(ms);
            if (response.status === 200) {
                setIsLogged(true);
            } else {
                setIsLogged(false);
                if (redirectToLogin === true) {
                    navigate("/login");
                }
            }
            setIsLoading(false);
        })();
        return () => {
            controller.abort();
        };
    }, []);

    return (
        <Context.Provider value={[isLogged, setIsLogged]}>
            {isLoading ? (
                <div>loading</div>
            ) : (
                <>
                    <header>
                        <NavigationBar isLogged={isLogged} />
                    </header>
                    <Outlet />
                </>
            )}
        </Context.Provider>
    );
}

GlobalContextProvider.propTypes = {
    children: PropTypes.element,
};

// function to mimic rount trip form the server
async function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

export default GlobalContextProvider;
