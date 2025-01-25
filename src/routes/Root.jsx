import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context as GlobalContext } from "../utils/GlobalStateContext.js";
import { useEffect } from "react";

function Root() {
    const [isLogged] = useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLogged) {
            navigate("/dashboard");
            return;
        }
    }, [isLogged]);

    return null;
}

export default Root;
