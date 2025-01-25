import PropTypes from "prop-types";
import styles from "./ContentInput.module.css";

function ContentInput({ defaultValue }) {
    return (
        <div className={styles.content}>
            <label htmlFor="post-content">Content: </label>
            <textarea
                name="content"
                id="post-content"
                rows={20}
                cols={80}
                placeholder="Content"
                defaultValue={defaultValue}
            />
        </div>
    );
}

ContentInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
};

export default ContentInput;
