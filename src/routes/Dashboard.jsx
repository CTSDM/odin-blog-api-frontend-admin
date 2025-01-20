import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context as GlobalContext } from "../utils/GlobalStateContext.js";
import routes from "../routes.jsx";
import PostPreviewContainer from "../components/PostPreviewContainer.jsx";
import styles from "./Dashboard.module.css";

function Dashboard() {
    const [isLogged] = useContext(GlobalContext);
    console.log(isLogged);
    if (isLogged) {
        return (
            <>
                <div className={styles.container}>
                    <div>
                        <NavLink className={styles.link} to="/posts/new">
                            {"Create new post"}
                        </NavLink>
                        <div>Here are some posts that you can handle</div>
                    </div>
                    <PostPreviewContainer />
                </div>
            </>
        );
    } else {
        routes.navigate("/login");
    }
}

export default Dashboard;
