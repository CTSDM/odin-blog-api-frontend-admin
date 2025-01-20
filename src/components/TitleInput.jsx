import styles from "./TitleInput.module.css";

function TitleInput() {
    return (
        <div className={styles.title}>
            <label htmlFor="post-title">Title: </label>
            <input
                type="text"
                name="title"
                id="post-title"
                placeholder="Title"
            />
        </div>
    );
}

export default TitleInput;
