import PropTypes from "prop-types";
import styles from "./InputLogin.module.css";

function InputText({ type, name, placeholder }) {
    return (
        <div className={styles["input-container"]}>
            <input
                type={type}
                name={name}
                id={`input-${name}`}
                aria-label={name}
                placeholder=" "
            />
            <label htmlFor={`input-${name}`} className={styles.placeholder}>
                <div>{placeholder}</div>
            </label>
        </div>
    );
}

InputText.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

export default InputText;
