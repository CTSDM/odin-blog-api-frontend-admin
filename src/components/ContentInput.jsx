import styles from "./ContentInput.module.css";

function ContentInput() {
    return (
        <div className={styles.content}>
            <label htmlFor="post-content">Content: </label>
            <textarea
                name="content"
                id="post-content"
                rows={20}
                cols={80}
                placeholder="Content"
            />
        </div>
    );
}

export default ContentInput;
