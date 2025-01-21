import { redirect } from "react-router-dom";
import { useContext } from "react";
import { Context as GlobalContext } from "../utils/GlobalStateContext.js";

function Root() {
    const [isLogged] = useContext(GlobalContext);

    if (isLogged) {
        redirect("/dashboard");
        return;
    }

    return null;
}

export default Root;
