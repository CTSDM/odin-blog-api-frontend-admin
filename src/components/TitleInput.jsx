import PropTypes from "prop-types";
import styles from "./TitleInput.module.css";

function TitleInput({ defaultValue }) {
    return (
        <div className={styles.title}>
            <label htmlFor="post-title">Title: </label>
            <input
                type="text"
                name="title"
                id="post-title"
                placeholder="Title"
                defaultValue={defaultValue}
            />
        </div>
    );
}

TitleInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
};

export default TitleInput;
