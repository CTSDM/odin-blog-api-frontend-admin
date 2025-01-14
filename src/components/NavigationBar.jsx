import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { elementsNavBar } from "../../config/config.js";
import styles from "./NavigationBar.module.css";
import navBarImg from "../assets/delta-sigma.svg";

function NavigationBar({ isLogged }) {
    const entriesNavBar = Object.entries(elementsNavBar);
    // this logic only works for login logout, gotta find a better logic tbh
    const [key, value] = isLogged ? entriesNavBar[1] : entriesNavBar[0];
    return (
        <div role={"nav-container"} className={styles.bar}>
            <div>
                <img src={navBarImg} alt="company logo" />
            </div>
            <nav>
                <NavLink to={value} key={key}>
                    {key}
                </NavLink>
            </nav>
        </div>
    );
}

NavigationBar.propTypes = {
    isLogged: PropTypes.bool,
};

export default NavigationBar;
