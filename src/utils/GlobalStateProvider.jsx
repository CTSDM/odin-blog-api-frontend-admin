import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import PropTypes from "prop-types";

import { Context } from "./GlobalStateContext.js";
import NavigationBar from "../components/NavigationBar.jsx";

function GlobalContextProvider() {
    const [isLoading, setIsLoading] = useState(true);
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        (async () => {
            setIsLoading(true);
            const url = "http://localhost:5000/login";
            const response = await fetch(url, {
                signal: controller.signal,
                mode: "cors",
                credentials: "include",
                method: "get",
            });
            await sleep(5000);
            if (response.status === 200) {
                setIsLogged(true);
            } else {
                setIsLogged(false);
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
                    <NavigationBar isLogged={isLogged} />
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
