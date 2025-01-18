import routes from "../routes";
import { useContext } from "react";
import { Context as GlobalContext } from "../utils/GlobalStateContext.js";

function Root() {
    const [isLogged] = useContext(GlobalContext);

    if (isLogged) {
        routes.navigate("/dashboard");
    } else {
        routes.navigate("/login");
    }

    return null;
}

export default Root;
