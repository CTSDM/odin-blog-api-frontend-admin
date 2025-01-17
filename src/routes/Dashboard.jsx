import { NavLink } from "react-router-dom";
import styles from "./Dashboard.module.css";

function Dashboard() {
    return (
        <>
            <div className={styles.container}>
                <div>Here are some posts that you can handle</div>
                <div>
                    <NavLink to="/posts/new">
                        <button type="button">Create new post</button>
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
